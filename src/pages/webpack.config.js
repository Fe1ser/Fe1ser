const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');

// Функція для отримання списку файлів у директорії
function generateHtmlPlugins(templateDir) {
    // Отримуємо список файлів у директорії
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        // Розділяємо ім'я файлу та розширення
        const parts = item.split('.');
        const name = parts[0];
        // Створюємо новий екземпляр плагіна з поточним шляхом та ім'ям файлу
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.html`),
        });
    });
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        // Встановлюємо плагін CleanWebpackPlugin для очищення директорії dist
        new CleanWebpackPlugin(),
        // Передаємо шлях до директорії з сторінками в функцію
        ...generateHtmlPlugins('./src/pages')
    ],
};
