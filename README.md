# DoneZo-FE ✨ frontend perfection.

![GitHub stars](https://img.shields.io/github/stars/priyanshu0412/DoneZo-FE?style=for-the-badge&color=gold)
![GitHub forks](https://img.shields.io/github/forks/priyanshu0412/DoneZo-FE?style=for-the-badge&color=cornflowerblue)
![GitHub language](https://img.shields.io/github/languages/top/priyanshu0412/DoneZo-FE?style=for-the-badge&color=red)
![GitHub license](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

---

## 🌟 Project Overview

Welcome to **DoneZo-FE**! This repository houses the robust and dynamic frontend application, engineered for a seamless user experience. Built with a modern Next.js framework, it leverages the power of React and a suite of cutting-edge libraries to deliver high performance, beautiful animations, and scalable architecture.

Our goal is to provide a highly interactive, visually appealing, and feature-rich interface that sets a new standard for web applications.

## 🚀 Features

Given the powerful tech stack, DoneZo-FE is designed with the following capabilities in mind:

-   ⚡️ **Blazing Fast Performance**: Optimized for speed with Next.js, Vercel's framework for production.
-   🔒 **Secure Authentication**: Integrated user management and authentication powered by Clerk.
-   🎨 **Stunning UI/UX**: Crafted with beautiful design components from Material-UI (MUI) and custom styling.
-   ✨ **Fluid Animations & Transitions**: Incorporates `framer-motion` and `gsap` for captivating motion design.
-   🖼️ **Dynamic Content Display**: Utilizes `@splidejs` for responsive and accessible carousels and sliders.
-   📱 **Fully Responsive Design**: Adapts flawlessly to various screen sizes using Tailwind CSS.
-   🧩 **Modern Component Architecture**: Built with reusable and modular React components.
-   🔍 **Iconography**: Rich set of icons powered by `lucide-react` and `@iconify/react`.
-   🍔 **Interactive Navigation**: Seamless navigation with modern hamburger menus.

## 🛠️ Tech Stack

DoneZo-FE is meticulously crafted using a powerful and modern technology stack:

| Category        | Technology                                                                                                                                                                                                               | Purpose                                                                               |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Framework**   | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)            | Frontend framework for server-side rendering and static site generation.              |
| **JavaScript**  | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)                                                                                                         | Core programming language.                                                            |
| **Styling**     | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)   | Utility-first CSS framework and a comprehensive set of UI components.                 |
| **Animations**  | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=gsap&logoColor=white)     | Declarative animation library and powerful animation engine.                          |
| **Authentication** | ![Clerk](https://img.shields.io/badge/Clerk-6943FF?style=for-the-badge&logo=clerk&logoColor=white)                                                                                                                   | Authentication and user management.                                                   |
| **Carousel**    | ![Splide.js](https://img.shields.io/badge/Splide.js-DD1E41?style=for-the-badge&logo=splide&logoColor=white)                                                                                                              | Lightweight and flexible carousel/slider library.                                     |
| **Utilities**   | ![clsx](https://img.shields.io/badge/clsx-black?style=for-the-badge&logo=npm&logoColor=white) ![tailwind-merge](https://img.shields.io/badge/tailwind--merge-blueviolet?style=for-the-badge&logo=npm&logoColor=white) | Utility for constructing `className` strings and merging Tailwind CSS classes.        |
| **Icons**       | ![Lucide React](https://img.shields.io/badge/Lucide_React-007FFF?style=for-the-badge&logo=figma&logoColor=white) ![Iconify](https://img.shields.io/badge/Iconify-3294F7?style=for-the-badge&logo=figma&logoColor=white) | Modern, customizable icon library and extensive icon collection.                      |
| **Dev Tools**   | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)         | Linter for identifying and reporting on patterns in JavaScript code and CSS processor. |

## 🚀 Installation & Setup

To get DoneZo-FE up and running on your local machine, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/priyanshu0412/DoneZo-FE.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd DoneZo-FE
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add your Clerk credentials.
    (Example: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...`)

## ▶️ Usage

Once the dependencies are installed, you can run the application in development mode:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

To build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To start the built application:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 📂 Project Structure

The project follows a standard Next.js directory structure, enhanced for maintainability and scalability:

```
DoneZo-FE/
├── .github/                 # GitHub related configurations (e.g., workflows)
├── public/                  # Static assets
├── src/                     # All source code
│   ├── app/                 # Next.js app directory with routes and server components
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utility functions and helpers
│   ├── styles/              # Global styles and Tailwind configurations
│   └── ...                  # Other potential directories (e.g., hooks, context)
├── .gitignore               # Files/directories to ignore from Git
├── README.md                # This README file
├── components.json          # Configuration for custom components (e.g., shadcn/ui)
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # JavaScript configuration (intellisense)
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
└── tailwind.config.mjs      # Tailwind CSS configuration
```

## 🙏 Contributing

We welcome contributions to **DoneZo-FE**! If you have suggestions for improvements, new features, or bug fixes, please follow these steps:

1.  **Fork** the repository.
2.  **Create** a new branch (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  **Open** a Pull Request.

Please ensure your code adheres to the existing style and conventions.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file (if present) for details. If not specified, it defaults to standard open-source practices.

## ✍️ Author & Contact

This project is maintained by Priyanshu Maurya.

Feel free to connect or reach out!

-   **GitHub**: [@priyanshu0412](https://github.com/priyanshu0412)
-   **Email**: priyanshumaurya.dev@gmail.com
-   **Portfolio**: Coming Soon!

---

## ⭐ Star the Repo!

If you found this project useful or interesting, please give it a star on GitHub! Your support helps us grow and motivates us to create even better software.

[![GitHub stars](https://img.shields.io/github/stars/priyanshu0412/DoneZo-FE?style=social)](https://github.com/priyanshu0412/DoneZo-FE/stargazers)

---
<div align="center">
    Made with ❤️ by priyanshu0412
</div>
