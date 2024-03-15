# Agrupana
Repositorio de proyecto de sistemas de Informacion UNIMET

**Proyecto Final**

Las Agrupaciones Estudiantiles de la Universidad Metropolitana, son grupos oficiales, conformados por estudiantes universitarios que comparten intereses en común, las mismas varían en objetivos e intereses, que pueden ser del tipo recreativo, cultural, deportivo o científico entre otras. En estos grupos se desarrollan actividades o proyectos de diferente índole, en general promueven el trabajo en equipo, el sentido de independencia y liderazgo para una formación integral, desarrollando nuevo conocimiento por parte de las agrupaciones de desarrollo científico e ingeniería, dando apoyo en el espacio humanista de la comunidad y ofreciendo un buen uso del tiempo libre en agrupaciones de esparcimiento, deportivo, cultural y lúdico.

Usted y su equipo, como Ingenieros de Sistemas, deberán crear una plataforma dedicada a la gestión de los grupos como referencia esta la página oficial en línea (Referencia: [Agrupaciones Estudiantiles Unimet](https://www.unimet.edu.ve/agrupaciones-estudiantiles/#mas-info) ). A continuación se listan algunos requerimientos que se consideran importantes. Considere que el siguiente conjunto de requerimientos no es exhaustivo, de manera que es posible que su equipo de trabajo deba extender las funcionalidades del sistema si es necesario, para alcanzar así la satisfacción del cliente final.

**Secciones Generales**

Los grupos estudiantiles en general se clasifican en: Deportivos, Culturales, Debates, Recreativos, entre otros. Adicionalmente, para ser miembro de un grupo deben llenar un formulario con los datos del participante, cada grupo debe tener información sobre su propósito, misión, objetivos, datos que lo identifican como son: título, categoría,  año de creación, responsable, ubicación, facultad si aplica. Dada esta información, usted y su equipo deben identificar cuáles son los grupos que se encuentran en la UNIMET, identificar su clasificación y sus atributos más relevantes, para que un estudiante se afilie o no.

**Página principal (Landing page)**

Esta página principal va a ser la primera impresión que tendrá el público sobre el producto realizado por usted y su equipo. Aquí se deberá mostrar información relevante sobre la aplicación: misión, visión y objetivos de la misma; en otras palabras, deberá vender la plataforma para la gestión y registro de los grupos estudiantiles.

Además, se deberá listar los grupos estudiantiles con los que cuenta la Universidad Metropolitana.  Es importante dar características, otro tipo de información cómo por ejemplo: información de contacto; feedback sobre los grupos; etc. Sea creativo.

Algunos de los principales módulos:

- **Registro: **En esta página el estudiante  deberá encontrar un formulario para ingresar por primera vez a la plataforma. Debe haber un formulario que recopile información importante del usuario como nombre, email, contraseña, teléfono, etc. También se deben incluir distintos proveedores de registro como Google, Facebook, etc.

- **Inicio de Sesión: **Esta debe ser una página con un formulario que sirva como punto de entrada para los usuarios ya registrados, se debe utilizar los campos de correo electrónico y contraseña o también proveedores de Google, Facebook, etc. El usuario debe escoger como quiere iniciar sesión. (Estudiante s o administradores). 

- **Perfil de Usuario: **Luego de haber iniciado sesión con credenciales válidas, este usuario podrá visitar esta página para editar su información personal como nombre, foto de perfil, número telefónico, dirección de correo y todo lo que usted encuentre relevante recolectar sobre el usuario.

- **Buscador de Grupos:   **Un grupo consiste de puntos de interés. Un grupo puede estar o no disponible. Además, un grupo tiene un identificador y un nombre para que permita su búsqueda.

- **Perfil del grupo:** Luego de que el estudiante  haya encontrado un grupo que se adecúe con los criterios de su búsqueda, tendrá que tener una página en la que se muestre detalladamente información sobre dicho grupo que seleccionó en la vista anterior (Buscador de grupo). Aquí deberán mostrarse detalles del grupo como: fotos (si Aplica), Visión, Misión, participantes, en general datos que sean importantes para que el estudiante  pueda tomar su decisión. Además, el factor clave es mostrar una lista de los grupos estudiantiles. Luego de que el estudiante haya seleccionado un grupo que se adecúe con los criterios de su búsqueda, tendrá que haber una página en la que se muestre detalladamente información del grupo seleccionado. 

- **Afiliación:** Esta página o sección de la plataforma solo deberá ser accesible si se seleccionó previamente un grupo estudiantil. Aquí el estudiante crea una afiliación.  Es importante que si un estudiante se afilia a un grupo aparezca en su perfil los grupos a los que pertenece. 

- **Listado de Grupos: **Realice un seguimiento de los grupos asociados a un estudiante.

- **Contribución al Grupo: **Luego de que el estudiante  haya escogido su grupo; se mostrará la página con la información suministrada donde además se deberá ver reflejado el monto a colaborar por el estudiantes según su selección, el día de la afiliación y demás información importante que considere. Para procesar el pago de la colaboración en línea se debe utilizar el servicio de Paypal.

- **Feedback:** Un estudiante que este afiliado puede dar su feedback sobre la experiencia que ha tenido en el grupo.  Esta funcionalidad es en pro de ayudar al ranking de los grupos en la plataforma.

**Secciones para el Rol “Administrador”**

**- Dashboard de grupos:** Luego de haber iniciado sesión con el rol de administrador y credenciales válidas, este podrá ver todos los grupos que se encuentran disponibles. Además podrá crear nuevas entradas y actualizar o eliminar las ya existentes. No se puede eliminar un grupo que tenga miembros. Es una condición importante. 

- **Dashboard de tipos:** En esta sección el administrador podrá ver todas los tipos o clasificación de los grupos que se encuentran creados en la plataforma. Además podrá crear nuevas entradas y actualizar o eliminar las ya existentes.

Recuerda que un grupo  debe pertenecer a una tipo específico por lo que al momento de crear una entrada, el administrador tendrá que seleccionar a que tipo pertenece

Se sugiere incluir una componente para que estudiante solo puedan consultar los grupos disponibles, seleccionar un grupo que están disponibles. Pertenecer a un grupo: un “estudiante” selecciona un grupo. Para cada grupo se debe desplegar el identificador y nombre del mismo.

**Requerimientos Técnicos**

1. Deberán crear un diseño, logotipo y nombre para la aplicación web.

2. Debe ser una página web responsiva, es decir, que se adapte tanto a teléfonos celulares como a tabletas y ordenadores.

3. Debe ser desarrollada en [React](https://es.reactjs.org).

4. Debe ser Hosteada en [Firebase](https://firebase.google.com/?hl=es-419).

5. Deben hacer uso de Firebase como backend.

6. Deben utilizar [Git](https://git-scm.com) para el control de versiones de su proyecto. Además, utilizar [GitHub](https://github.com) para almacenar su código y colaborar con sus compañeros.

Esto es importante, ya que el proyecto se va a corregir con base en los aportes de cada quien.

7. Pueden hacer uso de librerías que le faciliten el desarrollo de la aplicación.

8. La página debe ser transformada a una PWA.


