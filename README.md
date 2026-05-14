# NoteBook - Chrome Extension

A simple and effective Chrome extension that allows you to quickly save, view, and manage notes directly from your browser toolbar.

## Overview

NoteBook is a lightweight note-taking extension designed for quick note capture. Open it from your browser toolbar, type a note, save it, and access your notes anytime. Notes are persisted in browser storage, so they survive browser sessions.

## Features

- **Quick Note Entry**: Type notes directly into the popup interface
- **Save Tab Link**: One-click button to save the current page URL
- **Persistent Storage**: Notes are saved to browser localStorage and persist between sessions
- **Easy Access**: Open notes with one click from the toolbar
- **Delete Function**: Clear all notes with a double-click on the Delete button
- **Minimal UI**: Clean and simple interface for distraction-free note-taking

## How It Works

### User Interaction Flow

1. Click the NoteBook extension icon in the toolbar
2. **Option A - Save a note**: Type your note in the input field and click **Save**
3. **Option B - Save current page**: Click **Save Tab** to save the current page URL
4. Your note/link appears in the list below
5. Double-click **Delete** to clear all notes at once

### Technical Architecture

**Frontend Files:**

- `Index.html` - The popup UI with input field, save button, save-tab button, delete button, and note list
- `styles.css` - Styling for the popup interface
- `script.js` - Core application logic

**Key Features in Code:**

- **localStorage Integration**: Notes are stored in the browser's localStorage under the key `"myNote"`
- **Data Persistence**: On extension load, the app retrieves previously saved notes from storage
- **Tab URL Capture**: Uses Chrome's `tabs` API to get the current active tab URL
- **Input Validation**: Only saves non-empty notes (checks `trim()`)
- **Dynamic Rendering**: Notes are dynamically rendered to the DOM as they're added

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the `Chrome-Extension` folder
5. The NoteBook icon will appear in your toolbar

## Usage

### Saving a Note

1. Click the NoteBook icon
2. Type your note in the text field
3. Click **Save**
4. The note appears in the list

### Saving Current Page Link

1. Click the NoteBook icon
2. Click **Save Tab** button
3. The current page URL is automatically saved
4. The link appears in your note list

### Viewing Notes

- All saved notes and links are displayed in the popup list
- Notes persist when you close and reopen the extension
- Click any note/link to open it (if it's a URL)

### Clearing Notes

- Double-click the **Delete** button to clear all notes
- This action also clears localStorage

## File Structure

```text
Chrome-Extension/
├── manifest.json      # Extension metadata (Manifest V3)
├── Index.html         # Popup UI
├── styles.css         # Popup styling
├── script.js          # Application logic
├── README.md          # This file
└── icon.svg           # Extension icon
```

## Technical Details

### Manifest Configuration

- Uses **Manifest V3** (latest Chrome extension standard)
- Defines popup as `Index.html`
- Sets icon as `icon.svg`
- Includes `tabs` permission to access current tab URL

### Data Storage

- **Storage Type**: browser localStorage
- **Storage Key**: `"myNote"`
- **Data Format**: JSON stringified array of note strings and URLs

### Browser Compatibility

- **Chrome**: Full support (Manifest V3)
- **Chromium-based browsers**: Compatible with Manifest V3 support (Edge, Brave, etc.)

## Future Enhancements

Possible improvements for future versions:

- Add individual note deletion
- Add note editing functionality
- Support for note categories/tags
- Export notes to file
- Search/filter notes
- Character count limit per note
- Timestamps for each note

## Troubleshooting

**Notes not saving?**

- Check if localStorage is enabled in your browser
- Ensure you're clicking the Save button

**Extension not appearing?**

- Verify Developer mode is enabled
- Try reloading the extension (refresh button in extensions page)

**Notes disappeared?**

- If you cleared browser data, localStorage is also cleared
- Try double-clicking Delete to reset if corrupted
