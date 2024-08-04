
## TRANSLATE IA
#### VISITAR: https://translate-ia.vercel.app

![1](https://github.com/user-attachments/assets/87156c68-c61f-47b1-84d7-d7ece395868a)
![2](https://github.com/user-attachments/assets/4f6d5262-8ab3-40bf-abc3-ea9a561be6d3)
![3](https://github.com/user-attachments/assets/6dc32b2b-bd5f-42a1-b9c5-5b577181ada2)


## Descripción

translate-ia es una aplicación web que utiliza inteligencia artificial para traducir texto de manera eficiente y precisa. Con detección automática de idioma, traducción en tiempo real y opciones personalizables, ofrece una experiencia fluida y accesible para todos los usuarios.

## Características

- **Detección Automática de Idioma**: La aplicación identifica automáticamente el idioma del texto de entrada.
- **Traducción en Tiempo Real**: Traduce el texto al instante mientras se escribe.
- **Selector de Idiomas**: Permite elegir el idioma de destino de una lista de opciones.
- **Interfaz Intuitiva**: Diseño fácil de usar, adecuado para todo tipo de usuarios.
- **Soporte para Múltiples Idiomas**: Compatible con una amplia variedad de idiomas.

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/MartinAlexanderFloresTorres/translate-IA
```
4. Navega al directorio del proyecto:
```bash
cd translate-IA
```
7. Instala las dependencias:
```bash
npm install
```
9. Inicia la aplicación:
```bash
npm run dev
```
10. Abrir la URL que te brinda en la terminal:
[http://localhost:3000](http://localhost:3000)

# Requerimientos
1. Tener una api key de https://platform.openai.com/api-keys

## Uso

1. Ingresa el texto en el campo de entrada.
2. Selecciona el idioma de destino si es necesario.
3. Haz clic en "Traducir" para obtener la traducción en tiempo real.
4. Utiliza el botón de cancelar si necesitas detener la traducción en curso.

## Uso del componente `AItranslate`:
```bash
 <AItranslate
    mode="modal" // (required) mode: "modal" or "inline"
    value="Hello world" // (required) text to translate
    showLenguageSelector // (optional) show the lenguage selector
    source="en" // (optional) If the original language is not specified, it will be deducted
    target={{
      languageName: 'Español',
      shortCode: 'es',
      fullLocaleCode: 'es-ES',
    }} // (optional) the target language will be obtained from the user if it is not specified
/>

```

## Contribución

¡Las contribuciones son bienvenidas! Si deseas colaborar


## Contacto

Para preguntas o comentarios, puedes contactarnos en [martinalexanderflorestorres@gmail.com](mailto:martinalexanderflorestorres@gmail.com).


