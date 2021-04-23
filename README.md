CarServiceClient por KEVIN ALONSO RESTREPO GARCÍA
COMPONENTES Y SERVICIOS:



Nav Bar Component
Es un componente usado para mostrar las opciones de Car-list y Owners-list

Owner Edit Component
En este componente se permite editar un propietario existente o crear uno nuevo. Enviando un parametro por la url se obtiene el id del propietario para obtenerlo a través del servicio y editarlo.

Owner List Component
Es este componente se listan los propietarios. Como cada propietairo tiene varios campos, la información se muestra en una tabla para mejor visual. Se utilizo un  checkbox para cada propietario de la lista y asi poder eliminar multiples propietarios a la vez. Se añadio un botón 'Edit' para dirigir al componente owner-edit y poder editar cada propietario o agregar uno nuevo.

Owner service
En este servicio obtenemos los observables realcionados con las peticiones de un propietario: listarlos, obtener por id, crear, editar y borrar. También se creó un observable para eliminar varios propietarios a la vez usando el forkJoin de rxjs, el cual permite ejecutar multiples observables asincronamente y esperar a que todos sea resueltos.