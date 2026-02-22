import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class SettingsViewModel extends ChangeNotifier {
  final StorageService _storageService;

  SettingsViewModel(this._storageService) {
    _loadSettings();
  }

  bool _isDarkMode = true;
  bool _isStreakEnabled = true;

  ThemeMode get themeMode => _isDarkMode ? ThemeMode.dark : ThemeMode.light;
  bool get isDarkMode => _isDarkMode;
  bool get isStreakEnabled => _isStreakEnabled;

  void _loadSettings() {
    _isDarkMode = _storageService.isDarkMode();
    _isStreakEnabled = _storageService.isStreakEnabled();
    notifyListeners();
  }

  Future<void> toggleTheme(bool value) async {
    _isDarkMode = value;
    await _storageService.setDarkMode(value);
    notifyListeners();
  }

  Future<void> toggleStreak(bool value) async {
    _isStreakEnabled = value;
    await _storageService.setStreakEnabled(value);
    notifyListeners();
  }

  Future<void> clearHistory() async {
    await _storageService.clearHistory();
    notifyListeners();
  }
}
