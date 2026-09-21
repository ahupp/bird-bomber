# Bird Bomber

## Edit and preview

1. Open this repository in VS Code or GitHub Codespaces.
2. Install the recommended **Live Preview** extension by Microsoft
   (`ms-vscode.live-server`). New Codespaces install it automatically. For an
   existing Codespace, install it from Extensions or run **Codespaces: Rebuild
   Container** to apply the updated container configuration.
3. Live Preview starts automatically when the workspace opens. Codespaces is
   configured to open the game beside the editor when its port is detected.
   If VS Code asks about automatic tasks, choose **Allow**. After installing the
   extension in an already-open workspace, reload the editor once.
4. Edit `sketch.js` and save. The preview reloads and the game restarts with your
   changes.

In Codespaces, **"This content is blocked"** can mean that GitHub's private-port
sign-in page cannot open inside the preview frame. Open both forwarded port
links (3000 and 3001) from the **Ports** panel in separate browser tabs and let
the sign-in redirects finish. Then close and reopen the embedded preview using
the port's **Open in Preview** action. Port 3001 handles automatic reloads.
The ports stay private; changing the game's CORS headers does not fix a blocked
GitHub sign-in page.

To open or reopen Microsoft's Live Preview pane in desktop VS Code, open
`index.html` and click **Show Preview** in the editor's top-right corner. The
Command Palette also offers **Live Preview: Start Server** and **Live Preview:
Show Preview (External Browser)**.

For an existing Codespace, pull these settings and run **Developer: Reload
Window** once. If it already has Live Preview installed, a container rebuild
is not needed. If the preview pane does not open, use **Ports → 3000 → Open in
Preview**. Keep one editor window connected to the Codespace: additional
windows can start additional servers on different ports.

File saves update your workspace. To save a checkpoint to GitHub, review and
stage your changes in **Source Control**, enter a description, then choose
**Commit & Push** (or **Publish Branch** for a new branch).
