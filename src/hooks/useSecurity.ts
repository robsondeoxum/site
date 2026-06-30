import { useEffect } from "react";

export function useSecurity() {
  useEffect(() => {
    // Prevent right click (context menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Prevent image dragging (avoid image copying)
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };
    document.addEventListener("dragstart", handleDragStart);

    // Prevent text selection start
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener("selectstart", handleSelectStart);

    // Prevent copy event (e.g. from copy command/context action)
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };
    document.addEventListener("copy", handleCopy);

    // Block common inspection hotkeys
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }

      // Ctrl+C (Copy)
      if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
        return;
      }

      // Ctrl+S (Save)
      if (e.ctrlKey && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        return;
      }

      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" ||
          e.key === "i" ||
          e.key === "J" ||
          e.key === "j" ||
          e.key === "C" ||
          e.key === "c")
      ) {
        e.preventDefault();
        return;
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
        return;
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
