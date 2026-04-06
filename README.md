# Responsive Website Showcase

A web application designed for developers and designers to preview websites across multiple device sizes simultaneously.

## Features

- **Multi-Device Preview**: View any website across desktop, tablet, and mobile breakpoints side-by-side.
- **Dynamic Workspace**: Add custom device instances with specific dimensions and styles.
- **Device Rotation**: Instantly toggle between portrait and landscape orientation for any device.
- **Infinite Canvas**: A fluid, draggable workspace that supports both horizontal and vertical navigation.
- **Precision Zoom**: Scale the entire workspace from 10% to 150% to get either a bird's-eye view or a detailed inspection.
- **Middle-Click Navigation**: Intuitive canvas dragging using the middle mouse button (scroll wheel).
- **Ctrl+Scroll Zoom**: Fast and fluid zooming interaction similar to design tools.

## How to Use

1. **Enter a URL**: Type the website address you want to test in the header search bar and press Enter or click **Preview**.
2. **Navigate**: Use your **Middle Mouse Button** (scroll wheel) to drag the canvas in any direction.
3. **Zoom**: Hold **Ctrl** while scrolling or use the slider in the footer.
4. **Rotate**: Click the rotation icon on any device frame to swap its width and height.
5. **Customize**: Add new devices via the **Add Device** button or remove existing ones using the trash icon.
6. **Reset**: Use the reset button in the header to clear the workspace and return to default settings.

## Important Restrictions

Please be aware that this tool relies on HTML `<iframe>` elements to display content. Due to security policies on the modern web, some websites may not load:

- **X-Frame-Options**: Many large platforms (like Google, Facebook, or Amazon) explicitly forbid being loaded inside an iframe to prevent clickjacking.
- **Content-Security-Policy (CSP)**: Sites with strict CSP headers may block cross-origin embedding.
- **Mixed Content**: If this app is served over HTTPS, it cannot load HTTP-only websites due to browser security restrictions.

If a website fails to load, it is likely due to one of these server-side security settings, which cannot be bypassed by client-side applications.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  
(c) 2026 Paul Köhler (komed3). All rights reserved.
