import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class HistoryViewModel extends ChangeNotifier {
  final StorageService _storageService;

  HistoryViewModel(this._storageService);

  List<Map<String, dynamic>> _history = [];
  List<Map<String, dynamic>> get history => _history;

  int _streak = 0;
  int get streak => _streak;

  bool _streakEnabled = true;
  bool get streakEnabled => _streakEnabled;

  int _totalCompletedTasks = 0;
  int get totalCompletedTasks => _totalCompletedTasks;

  void loadHistory() {
    _history = _storageService.getAllHistoryEntries();
    _streakEnabled = _storageService.isStreakEnabled();
    _streak = _storageService.getStreak();
    _totalCompletedTasks = _storageService.getTotalCompleted();
    notifyListeners();
  }
}
