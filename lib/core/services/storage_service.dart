import 'dart:convert';
import 'package:hive_flutter/hive_flutter.dart';

class StorageService {
  static const String _settingsBoxName = 'settings';
  static const String _historyBoxName = 'history';

  // Singleton pattern
  StorageService._privateConstructor();
  static final StorageService _instance = StorageService._privateConstructor();
  factory StorageService() => _instance;

  Box<String>? _settingsBox;
  Box<String>? _historyBox;

  Future<void> init() async {
    await Hive.initFlutter();
    _settingsBox = await Hive.openBox<String>(_settingsBoxName);
    _historyBox = await Hive.openBox<String>(_historyBoxName);
  }

  // --- Settings ---
  bool isDarkMode() {
    final value = _settingsBox?.get('darkMode', defaultValue: 'true');
    return value == 'true';
  }

  Future<void> setDarkMode(bool isDark) async {
    await _settingsBox?.put('darkMode', isDark.toString());
  }

  bool isStreakEnabled() {
    final value = _settingsBox?.get('streakEnabled', defaultValue: 'true');
    return value == 'true';
  }

  Future<void> setStreakEnabled(bool enabled) async {
    await _settingsBox?.put('streakEnabled', enabled.toString());
  }

  int getStreak() {
    final value = _settingsBox?.get('currentStreak', defaultValue: '0');
    return int.tryParse(value ?? '0') ?? 0;
  }

  Future<void> setStreak(int streak) async {
    await _settingsBox?.put('currentStreak', streak.toString());
  }

  int getTotalCompleted() {
    final value = _settingsBox?.get('totalCompleted', defaultValue: '0');
    return int.tryParse(value ?? '0') ?? 0;
  }

  Future<void> incrementTotalCompleted() async {
    final current = getTotalCompleted();
    await _settingsBox?.put('totalCompleted', (current + 1).toString());
  }

  // --- History (Format: yyyy-MM-dd -> JSON String of tasks) ---
  List<Map<String, dynamic>> getTasksForDate(DateTime date) {
    final key = _formatDateKey(date);
    final jsonString = _historyBox?.get(key);
    if (jsonString == null) return [];

    try {
      final List<dynamic> decoded = jsonDecode(jsonString);
      return decoded.map((e) => e as Map<String, dynamic>).toList();
    } catch (e) {
      return [];
    }
  }

  Future<void> saveTasksForDate(
    DateTime date,
    List<Map<String, dynamic>> tasks,
  ) async {
    final key = _formatDateKey(date);
    await _historyBox?.put(key, jsonEncode(tasks));
  }

  List<Map<String, dynamic>> getAllHistoryEntries() {
    if (_historyBox == null) return [];

    List<Map<String, dynamic>> history = [];
    for (var key in _historyBox!.keys) {
      try {
        final jsonString = _historyBox!.get(key);
        if (jsonString != null) {
          final List<dynamic> decoded = jsonDecode(jsonString);
          history.add({
            'date': key,
            'tasks': decoded,
            'completedAll':
                decoded.length == 3 &&
                decoded.every((t) => t['isCompleted'] == true),
          });
        }
      } catch (e) {
        // Ignore parsing errors for individual entries
      }
    }

    // Sort descending by date string (yyyy-MM-dd)
    history.sort(
      (a, b) => (b['date'] as String).compareTo(a['date'] as String),
    );
    return history;
  }

  Future<void> clearHistory() async {
    await _historyBox?.clear();
    await _settingsBox?.put('currentStreak', '0');
    await _settingsBox?.put('totalCompleted', '0');
  }

  String _formatDateKey(DateTime date) {
    return '${date.year}-${date.month.toString().padLeft(2, '0')}-${date.day.toString().padLeft(2, '0')}';
  }
}
