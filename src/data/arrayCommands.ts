import ArrayMethod from "../types/ArrayMethods";

export const arrayCommands: ArrayMethod[] = [
  {
    id: 1,
    language: "sql",
    name: "SELECT",
    description:
      "El comando SELECT se utiliza para recuperar datos de una o más tablas.Si pasa *, se devuelven todas las columnas, de lo contrario puede pasar uno o más argumentos",
    example: `
SELECT * FROM nameTable; //muestra todas las columnas de una tabla

SELECT column1, column2, ... FROM nameTable; //muestra las columnas seleccionadas de una tabla
    `,
  },
  {
    id: 2,
    language: "sql",
    name: "SELECT",
    description:
      "El comando SELECT se utiliza para recuperar datos de una o más tablas.Si pasa *, se devuelven todas las columnas, de lo contrario puede pasar uno o más argumentos",
    example: `
SELECT * FROM nameTable; //muestra todas las columnas de una tabla

SELECT column1, column2, ... FROM nameTable;
    `,
  },
  {
    id: 3,
    language: "sql",
    name: "SELECT",
    description:
      "El comando SELECT se utiliza para recuperar datos de una o más tablas.Si pasa *, se devuelven todas las columnas, de lo contrario puede pasar uno o más argumentos",
    example: `
SELECT * FROM nameTable; //muestra todas las columnas de una tabla

SELECT column1, column2, ... FROM nameTable;
    `,
  },
  {
    id: 4,
    language: "docker",
    name: "docker images",
    description:
      "Muestra una lista de todas las imágenes de Docker descargadas y creadas en el sistema.",
    example: `
docker image
    `,
  },
  {
    id: 5,
    language: "docker",
    name: "docker ps",
    description:
      "Muestra una lista de todos los contenedores en ejecución en el sistema y  con la bandera -a muestra también los que no están en ejecución  .",
    example: `
docker ps
docker ps -a
    `,
  },
  {
    id: 6,
    language: "docker",
    name: "docker build",
    description: `Utilizado para crear una imagen personalizada de Docker a partir de un archivo Dockerfile El comando analiza las instrucciones del Dockerfile y crea una imagen que puede ser utilizada para ejecutar contenedores.
      Es importante poner un (.) punto al final del comando como se muestra en el ejemplo pues indica a docker que el Dockerfile se encuentra en la ruta principal de lo contrarion indicar la ruta`,
    example: `
docker build -t usernamedocker/nameimage:version .

docker build -t usernamedocker/nameimage:version ./src/path-Dockerfile
    `,
  },
  {
    id: 7,
    language: "docker",
    name: "docker push",
    description: `Envía una imagen de Docker a un registro, como Docker Hub. Antes de usar este comando, se debe etiquetar la imagen con el nombre de usuario y el nombre del repositorio`,
    example: `
docker push nameimage
    `,
  },
  {
    id: 8,
    language: "docker",
    name: "docker run",
    description: `Este comando se utiliza para lanzar un contenedor a partir de una imagen de Docker. Si la imagen no está presente localmente, Docker la descargará automáticamente desde Docker Hub u otro registro configurado.
    Este comando puede usar diferentes banderas como -d que ejecuta el contenedo en segundo plano ocultando los log en consola, -p que indica el puerto (maquina física:máquina docker), --name que permite nombrar el contenedor, -e que permite indicar variables de entorno --memory indica la memoria dedicada al contenedor --cpuset-cpus indica el numero de cps de la máquina.
    `,
    example: `
docker run -d -p 9000:8080 --name namecontainer nameimage

docker run -d -p 3050:8080 -e SQLDIR=http/dir/conection/database --name namecontainer nameimage

docker run -d -p 9001:8080 -e SQLDIR=http/dir/conection/database --name namecontainer --memory 200m --cpuser-cpus 1 nameimage
    `,
  },
  {
    id: 9,
    language: "docker",
    name: "docker exec",
    description: `Este comando se utiliza para brir la consola del contenedor permitiendo tener una mayor claridad sobre los log y ejecuciones dentro de la maquina.
    `,
    example: `
docker exec -it
    `,
  },
  {
    id: 10,
    language: "docker",
    name: "docker commit",
    description: `Este comando se utiliza para crear una imagen a partir de un contenedor.
    `,
    example: `
docker commit namecontainer usernamedocker/nameimage:version
    `,
  },
  {
    id: 11,
    language: "docker",
    name: "docker compose ls",
    description: `Este comando se utiliza para levantar un contenedor a partir de un archivo de tipo docker-compose, este tipo de archivos contienen una serie de configuraciones que permiten estar conectar y ejecutar varios servicios de Docker al mismo tiempo.
    `,
    example: `
docker-compose up -d 
    `,
  },
  {
    id: 12,
    language: "docker",
    name: "docker compose ps",
    description: `Este comando se utiliza para ver todos los contenedor que estan ejecución.
    `,
    example: `
docker-compose ps
    `,
  },
  {
    id: 13,
    language: "docker",
    name: "docker pull",
    description: `Permite descargar una imagen de Docker desde un registro, como Docker Hub. Si se especifica un nombre de usuario o un registro privado, se debe indicar el nombre completo de la imagen.
    `,
    example: `
docker pull
    `,
  },
];
