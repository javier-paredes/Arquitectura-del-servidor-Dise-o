# Arquitectura-del-servidor-Diseño
Entrega del desafio para la clase 40 de Arquitectura del servidor: Diseño

<h2>Instrucciones para la corrección:</h2>

1.  En cada carpeta con el nombre correspondiente se separó en persistencia, models y routes

2. Se agregaron las persistencias en base de datos mariaDB y sistema de archivos local.

3. Se creó una clase factory que se encarga de elegir la persistencia que se quiera usar mediante el metodo getPersistencia('${tipo}') donde la variable tipo es el nombre de la DB.
En la misma clase se encuentra el patron de diseño de Singleton en donde se crean las instancias mediante el metodo estatico getInstancia();

4. En el archivo de routes, por ejemplo de productos, se crea una llamada al creador de instancias y luego se le aplica getPersistencia a la instancia creada.

5. Cada solicitud tiene reemplazazada la funcion que antes llamaba directamente a la api de productos por la funcion del factory que llamara a los metodos de listar, guardar, borrar y actualizar.
