/**Hallamos las que comienzan con C mayuscula y que tienen menos de 500mil */
db.ciudades.find({$and:[{"provincia.ca":{$regex: /^C/}},{habitantes:{$lt:500000}}]})
/**
 { "_id" : 4, "ciudad" : "Segovia", "provincia" : { "provincia" : "Segovia", "ca" : "Castilla y Leon" }, "habitantes" : 154095 }
{ "_id" : 7, "ciudad" : "Burgos", "provincia" : { "provincia" : "Burgos", "ca" : "Castilla y Leon" }, "habitantes" : 355429 }
 */

/**Hallamos las que contienen a.u con un caractér entre ellas*/
db.ciudades.find({$and:[{"provincia.ca":{$regex: /a.u/}}]})
/**
{ "_id" : 1, "ciudad" : "Sevilla", "provincia" : { "provincia" : "Sevilla", "ca" : "Andalucia" }, "habitantes" : 1950000 }
{ "_id" : 2, "ciudad" : "Badajoz", "provincia" : { "provincia" : "Badajoz", "ca" : "Extremadura" }, "habitantes" : 672493 }
{ "_id" : 5, "ciudad" : "Málaga", "provincia" : { "provincia" : "Malaga", "ca" : "Andalucia" }, "habitantes" : 1641000 }
{ "_id" : 6, "ciudad" : "Jerez de la Frontera", "provincia" : { "provincia" : "Cadiz", "ca" : "Andalucia" }, "habitantes" : 212879 }
{ "_id" : 9, "ciudad" : "Huelva", "provincia" : { "provincia" : "Huelva", "ca" : "Andalucia" }, "habitantes" : 524576 }
{ "_id" : 10, "ciudad" : "Merida", "provincia" : { "provincia" : "Badajoz", "ca" : "Extremadura" }, "habitantes" : 59335 }
 */

/**Hallamos los que su provincia terminan en cia o tienen menos de 500000 */
db.ciudades.find({$or:[{"provincia.provincia":{$regex:/ia$/}},{habitantes:{$lt:500000}}]})
/**
{ "_id" : 4, "ciudad" : "Segovia", "provincia" : { "provincia" : "Segovia", "ca" : "Castilla y Leon" }, "habitantes" : 154095 }
{ "_id" : 6, "ciudad" : "Jerez de la Frontera", "provincia" : { "provincia" : "Cadiz", "ca" : "Andalucia" }, "habitantes" : 212879 }
{ "_id" : 7, "ciudad" : "Burgos", "provincia" : { "provincia" : "Burgos", "ca" : "Castilla y Leon" }, "habitantes" : 355429 }
{ "_id" : 8, "ciudad" : "Valencia", "provincia" : { "provincia" : "Valencia", "ca" : "Comunidad Valenciana" }, "habitantes" : 2541000 }
{ "_id" : 10, "ciudad" : "Merida", "provincia" : { "provincia" : "Badajoz", "ca" : "Extremadura" }, "habitantes" : 59335 } 
*/

/**Hallamos las ciudades que comienzan por M o las que tienen mas de dos millones de habitantes */
db.ciudades.find({$or:[{ciudad:{$regex:/^M/}},{habitantes:{$gt:2000000}}]})
/**
 { "_id" : 3, "ciudad" : "Madrid", "provincia" : { "provincia" : "Madrid", "ca" : "Comunidad de Madrid" }, "habitantes" : 6642000 }
{ "_id" : 5, "ciudad" : "Málaga", "provincia" : { "provincia" : "Malaga", "ca" : "Andalucia" }, "habitantes" : 1641000 }
{ "_id" : 8, "ciudad" : "Valencia", "provincia" : { "provincia" : "Valencia", "ca" : "Comunidad Valenciana" }, "habitantes" : 2541000 }
{ "_id" : 10, "ciudad" : "Merida", "provincia" : { "provincia" : "Badajoz", "ca" : "Extremadura" }, "habitantes" : 59335 }
 */