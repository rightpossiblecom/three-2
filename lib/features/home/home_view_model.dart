import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class HomeViewModel extends ChangeNotifier {
  final StorageService _storageService;

  HomeViewModel(this._storageService) {
    _loadTodayTasks();
  }

  List<Map<String, dynamic>> _tasks = [];
  List<Map<String, dynamic>> get tasks => _tasks;

  DateTime _currentDate = DateTime.now();
  DateTime get currentDate => _currentDate;

  void _loadTodayTasks() {
    _checkAndHandleDayRollover();
    _tasks = _storageService.getTasksForDate(_currentDate);
    notifyListeners();
  }

  void _checkAndHandleDayRollover() {
    final now = DateTime.now();
    if (now.year != _currentDate.year ||
        now.month != _currentDate.month ||
        now.day != _currentDate.day) {
      // Rollover occurred. Check if yesterday's tasks were all completed
      if (_tasks.length == 3 && _tasks.every((t) => t['isCompleted'] == true)) {
        if (_storageService.isStreakEnabled()) {
          final streak = _storageService.getStreak();
          _storageService.setStreak(streak + 1);
        }
      } else {
        // Break streak
        _storageService.setStreak(0);
      }

      _currentDate = now;
      _tasks = []; // Start fresh
    }
  }

  Future<void> addTask(String title) async {
    _checkAndHandleDayRollover();
    if (_tasks.length >= 3) return;

    if (title.trim().isEmpty) return;

    _tasks.add({
      'title': title.trim(),
      'isCompleted': false,
      'createdAt': DateTime.now().toIso8601String(),
    });

    await _storageService.saveTasksForDate(_currentDate, _tasks);
    notifyListeners();
  }

  Future<void> toggleTaskCompletion(int index) async {
    _checkAndHandleDayRollover();
    if (index < 0 || index >= _tasks.length) return;

    final isCompleted = _tasks[index]['isCompleted'] as bool;
    _tasks[index]['isCompleted'] = !isCompleted;

    if (!isCompleted) {
      await _storageService.incrementTotalCompleted();
    }

    await _storageService.saveTasksForDate(_currentDate, _tasks);
    notifyListeners();
  }

  Future<void> deleteTask(int index) async {
    _checkAndHandleDayRollover();
    if (index < 0 || index >= _tasks.length) return;

    _tasks.removeAt(index);
    await _storageService.saveTasksForDate(_currentDate, _tasks);
    notifyListeners();
  }
}
