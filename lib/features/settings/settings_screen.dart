import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';
import 'settings_view_model.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Settings',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
      ),
      body: Consumer<SettingsViewModel>(
        builder: (context, viewModel, child) {
          return ListView(
            padding: const EdgeInsets.all(16.0),
            children: [
              _buildSectionHeader('Preferences', colorScheme),
              _buildSwitchTile(
                'Dark Mode',
                'Toggle dark or light theme',
                Icons.dark_mode,
                viewModel.isDarkMode,
                viewModel.toggleTheme,
                colorScheme,
              ),
              _buildSwitchTile(
                'Streak Counter',
                'Show your current streak in history',
                Icons.local_fire_department,
                viewModel.isStreakEnabled,
                viewModel.toggleStreak,
                colorScheme,
              ),
              const SizedBox(height: 24),
              _buildSectionHeader('Data', colorScheme),
              ListTile(
                leading: Icon(Icons.delete_forever, color: colorScheme.error),
                title: Text(
                  'Clear History',
                  style: TextStyle(color: colorScheme.error),
                ),
                subtitle: const Text('Remove all completed tasks and streaks'),
                onTap: () => _showClearDialog(context, viewModel),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              const SizedBox(height: 24),
              _buildSectionHeader('About App', colorScheme),
              ListTile(
                leading: const Icon(Icons.privacy_tip_outlined),
                title: const Text('Privacy Policy'),
                trailing: const Icon(Icons.arrow_forward_ios, size: 16),
                onTap: () => _launchURL(
                  'https://example.com/privacy',
                ), // Placeholder for play store
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              ListTile(
                leading: const Icon(Icons.description_outlined),
                title: const Text('Terms of Service'),
                trailing: const Icon(Icons.arrow_forward_ios, size: 16),
                onTap: () =>
                    _launchURL('https://example.com/terms'), // Placeholder
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              ListTile(
                leading: const Icon(Icons.star_outline),
                title: const Text('Rate App'),
                trailing: const Icon(Icons.arrow_forward_ios, size: 16),
                onTap: () {}, // Implementation for store rating goes here
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              const SizedBox(height: 48),
              Center(
                child: Text(
                  'Version 1.0.0',
                  style: TextStyle(
                    color: colorScheme.onSurface.withOpacity(0.5),
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildSectionHeader(String title, ColorScheme colorScheme) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Text(
        title.toUpperCase(),
        style: TextStyle(
          fontSize: 12,
          fontWeight: FontWeight.bold,
          color: colorScheme.primary,
          letterSpacing: 1.2,
        ),
      ),
    );
  }

  Widget _buildSwitchTile(
    String title,
    String subtitle,
    IconData icon,
    bool value,
    Function(bool) onChanged,
    ColorScheme colorScheme,
  ) {
    return SwitchListTile(
      title: Text(title),
      subtitle: Text(subtitle),
      secondary: Icon(icon, color: colorScheme.primary),
      value: value,
      activeThumbColor: colorScheme.primary,
      onChanged: onChanged,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
    );
  }

  Future<void> _showClearDialog(
    BuildContext context,
    SettingsViewModel viewModel,
  ) async {
    return showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Clear History?'),
          content: const Text(
            'This will permanently delete all your task history and streaks. This action cannot be undone.',
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () {
                viewModel.clearHistory();
                Navigator.of(context).pop();
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text('History cleared successfully.'),
                  ),
                );
              },
              child: const Text('Clear', style: TextStyle(color: Colors.red)),
            ),
          ],
        );
      },
    );
  }

  Future<void> _launchURL(String urlString) async {
    final uri = Uri.parse(urlString);
    if (!await launchUrl(uri)) {
      debugPrint('Could not launch $urlString');
    }
  }
}
