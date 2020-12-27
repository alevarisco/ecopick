INSERT INTO ecopick.rol (id, nombre) VALUES (1, 'Administrador');
INSERT INTO ecopick.rol (id, nombre) VALUES (2, 'Analista');
INSERT INTO ecopick.rol (id, nombre) VALUES (3, 'Cliente');
INSERT INTO ecopick.rol (id, nombre) VALUES (4, 'Encuestado');

INSERT INTO ecopick.genero (id, nombre) VALUES (1, 'Masculino');
INSERT INTO ecopick.genero (id, nombre) VALUES (2, 'Femenino');
INSERT INTO ecopick.genero (id, nombre) VALUES (3, 'Otro');

INSERT INTO ecopick.dispositivo (id, nombre) VALUES (1, 'Computadora de Escritorio (PC)');
INSERT INTO ecopick.dispositivo (id, nombre) VALUES (2, 'Laptop');
INSERT INTO ecopick.dispositivo (id, nombre) VALUES (3, 'Tablet');
INSERT INTO ecopick.dispositivo (id, nombre) VALUES (4, 'Teléfono');

INSERT INTO ecopick.edo_civil (id, nombre) VALUES (1, 'Soltero');
INSERT INTO ecopick.edo_civil (id, nombre) VALUES (2, 'Casado');
INSERT INTO ecopick.edo_civil (id, nombre) VALUES (3, 'Divorciado');
INSERT INTO ecopick.edo_civil (id, nombre) VALUES (4, 'Unión libre o Concubinato');
INSERT INTO ecopick.edo_civil (id, nombre) VALUES (5, 'Separado');
INSERT INTO ecopick.edo_civil (id, nombre) VALUES (6, 'Viudo');

INSERT INTO ecopick.ocupacion VALUES (1,'Maestro'),(2,'Albanil'),(3,'Carpintero'),(4,'Doctor'),(5,'Abogado');
INSERT INTO ecopick.disponibilidad VALUES (1,'00:00:00'),(2,'01:00:00'),(3,'02:00:00'),(4,'03:00:00'),(5,'04:00:00'),(6,'05:00:00'),(7,'06:00:00'),(8,'07:00:00'),(9,'08:00:00'),(10,'09:00:00'),(11,'10:00:00'),(12,'11:00:00'),(13,'12:00:00'),(14,'13:00:00'),(15,'14:00:00'),(16,'15:00:00'),(17,'16:00:00'),(18,'17:00:00'),(19,'18:00:00'),(20,'19:00:00'),(21,'20:00:00'),(22,'21:00:00'),(23,'22:00:00'),(24,'23:00:00');

INSERT INTO ecopick.nivel_academico (id, nombre) VALUES (1, 'Ninguno');
INSERT INTO ecopick.nivel_academico (id, nombre) VALUES (2, 'Primaria');
INSERT INTO ecopick.nivel_academico (id, nombre) VALUES (3, 'Secundaria');
INSERT INTO ecopick.nivel_academico (id, nombre) VALUES (4, 'Técnico Superior');
INSERT INTO ecopick.nivel_academico (id, nombre) VALUES (5, 'Universitario');
INSERT INTO ecopick.nivel_academico (id, nombre) VALUES (6, 'Maestría');
INSERT INTO ecopick.nivel_academico (id, nombre) VALUES (7, 'Doctorado');

INSERT INTO ecopick.nivel_socioeconomico (id, nombre) VALUES (1, 'Alto');
INSERT INTO ecopick.nivel_socioeconomico (id, nombre) VALUES (2, 'Medio-Alto');
INSERT INTO ecopick.nivel_socioeconomico (id, nombre) VALUES (3, 'Medio');
INSERT INTO ecopick.nivel_socioeconomico (id, nombre) VALUES (4, 'Medio-Bajo');
INSERT INTO ecopick.nivel_socioeconomico (id, nombre) VALUES (5, 'Bajo');
INSERT INTO ecopick.nivel_socioeconomico (id, nombre) VALUES (6, 'Extrema Pobreza');


INSERT INTO `ecopick`.`lugar`(`id`,`nombre`,`tipo`,`fk_lugar`) VALUES
('1', 'Venezuela', 0, NULL),
('2', 'Amazonas', 1, '1'),
('3', 'Anzoátegui', 1, '1'),
('4', 'Apure', 1, '1'),
('5', 'Aragua', 1, '1'),
('6', 'Barinas', 1, '1'),
('7', 'Bolívar', 1, '1'),
('8', 'Carabobo', 1, '1'),
('9', 'Cojedes', 1, '1'),
('10', 'Delta Amacuro', 1, '1'),
('11', 'Falcón', 1, '1'),
('12', 'Guárico', 1, '1'),
('13', 'Lara', 1, '1'),
('14', 'Mérida', 1, '1'),
('15', 'Miranda', 1, '1'),
('16', 'Monagas', 1, '1'),
('17', 'Nueva Esparta', 1, '1'),
('18', 'Portuguesa', 1, '1'),
('19', 'Sucre', 1, '1'),
('20', 'Táchira', 1, '1'),
('21', 'Trujillo', 1, '1'),
('22', 'Vargas', 1, '1'),
('23', 'Yaracuy', 1, '1'),
('24', 'Zulia', 1, '1'),
('25', 'Distrito Capital', 1, '1'),
('26', 'Dependencias Federales', 1, '1'),
('27', 'Maroa', 2, '2'),
('28', 'Puerto Ayacucho', 2, '2'),
('29', 'San Fernando de Atabapo', 2, '2'),
('30', 'Anaco', 2, '3'),
('31', 'Aragua de Barcelona', 2, '3'),
('32', 'Barcelona', 2, '3'),
('33', 'Boca de Uchire', 2, '3'),
('34', 'Cantaura', 2, '3'),
('35', 'Clarines', 2, '3'),
('36', 'El Chaparro', 2, '3'),
('37', 'El Pao Anzoátegui', 2, '3'),
('38', 'El Tigre', 2, '3'),
('39', 'El Tigrito', 2, '3'),
('40', 'Guanape', 2, '3'),
('41', 'Guanta', 2, '3'),
('42', 'Lechería', 2, '3'),
('43', 'Onoto', 2, '3'),
('44', 'Pariaguán', 2, '3'),
('45', 'Píritu', 2, '3'),
('46', 'Puerto La Cruz', 2, '3'),
('47', 'Puerto Píritu', 2, '3'),
('48', 'Sabana de Uchire', 2, '3'),
('49', 'San Mateo Anzoátegui', 2, '3'),
('50', 'San Pablo Anzoátegui', 2, '3'),
('51', 'San Tomé', 2, '3'),
('52', 'Santa Ana de Anzoátegui', 2, '3'),
('53', 'Santa Fe Anzoátegui', 2, '3'),
('54', 'Santa Rosa', 2, '3'),
('55', 'Soledad', 2, '3'),
('56', 'Urica', 2, '3'),
('57', 'Valle de Guanape', 2, '3'),
('58', 'Achaguas', 2, '4'),
('59', 'Biruaca', 2, '4'),
('60', 'Bruzual', 2, '4'),
('61', 'El Amparo', 2, '4'),
('62', 'El Nula', 2, '4'),
('63', 'Elorza', 2, '4'),
('64', 'Guasdualito', 2, '4'),
('65', 'Mantecal', 2, '4'),
('66', 'Puerto Páez', 2, '4'),
('67', 'San Fernando de Apure', 2, '4'),
('68', 'San Juan de Payara', 2, '4'),
('69', 'Barbacoas', 2, '5'),
('70', 'Cagua', 2, '5'),
('71', 'Camatagua', 2, '5'),
('72', 'Choroní', 2, '5'),
('73', 'Colonia Tovar', 2, '5'),
('74', 'El Consejo', 2, '5'),
('75', 'La Victoria', 2, '5'),
('76', 'Las Tejerías', 2, '5'),
('77', 'Magdaleno', 2, '5'),
('78', 'Maracay', 2, '5'),
('79', 'Ocumare de La Costa', 2, '5'),
('80', 'Palo Negro', 2, '5'),
('81', 'San Casimiro', 2, '5'),
('82', 'San Mateo', 2, '5'),
('83', 'San Sebastián', 2, '5'),
('84', 'Santa Cruz de Aragua', 2, '5'),
('85', 'Tocorón', 2, '5'),
('86', 'Turmero', 2, '5'),
('87', 'Villa de Cura', 2, '5'),
('88', 'Zuata', 2, '5'),
('89', 'Barinas', 2, '6'),
('90', 'Barinitas', 2, '6'),
('91', 'Barrancas', 2, '6'),
('92', 'Calderas', 2, '6'),
('93', 'Capitanejo', 2, '6'),
('94', 'Ciudad Bolivia', 2, '6'),
('95', 'El Cantón', 2, '6'),
('96', 'Las Veguitas', 2, '6'),
('97', 'Libertad de Barinas', 2, '6'),
('98', 'Sabaneta', 2, '6'),
('99', 'Santa Bárbara de Barinas', 2, '6'),
('100', 'Socopó', 2, '6'),
('101', 'Caicara del Orinoco', 2, '7'),
('102', 'Canaima', 2, '7'),
('103', 'Ciudad Bolívar', 2, '7'),
('104', 'Ciudad Piar', 2, '7'),
('105', 'El Callao', 2, '7'),
('106', 'El Dorado', 2, '7'),
('107', 'El Manteco', 2, '7'),
('108', 'El Palmar', 2, '7'),
('109', 'El Pao', 2, '7'),
('110', 'Guasipati', 2, '7'),
('111', 'Guri', 2, '7'),
('112', 'La Paragua', 2, '7'),
('113', 'Matanzas', 2, '7'),
('114', 'Puerto Ordaz', 2, '7'),
('115', 'San Félix', 2, '7'),
('116', 'Santa Elena de Uairén', 2, '7'),
('117', 'Tumeremo', 2, '7'),
('118', 'Unare', 2, '7'),
('119', 'Upata', 2, '7'),
('120', 'Bejuma', 2, '8'),
('121', 'Belén', 2, '8'),
('122', 'Campo de Carabobo', 2, '8'),
('123', 'Canoabo', 2, '8'),
('124', 'Central Tacarigua', 2, '8'),
('125', 'Chirgua', 2, '8'),
('126', 'Ciudad Alianza', 2, '8'),
('127', 'El Palito', 2, '8'),
('128', 'Guacara', 2, '8'),
('129', 'Guigue', 2, '8'),
('130', 'Las Trincheras', 2, '8'),
('131', 'Los Guayos', 2, '8'),
('132', 'Mariara', 2, '8'),
('133', 'Miranda', 2, '8'),
('134', 'Montalbán', 2, '8'),
('135', 'Morón', 2, '8'),
('136', 'Naguanagua', 2, '8'),
('137', 'Puerto Cabello', 2, '8'),
('138', 'San Joaquín', 2, '8'),
('139', 'Tocuyito', 2, '8'),
('140', 'Urama', 2, '8'),
('141', 'Valencia', 2, '8'),
('142', 'Vigirimita', 2, '8'),
('143', 'Aguirre', 2, '9'),
('144', 'Apartaderos Cojedes', 2, '9'),
('145', 'Arismendi', 2, '9'),
('146', 'Camuriquito', 2, '9'),
('147', 'El Baúl', 2, '9'),
('148', 'El Limón', 2, '9'),
('149', 'El Pao Cojedes', 2, '9'),
('150', 'El Socorro', 2, '9'),
('151', 'La Aguadita', 2, '9'),
('152', 'Las Vegas', 2, '9'),
('153', 'Libertad de Cojedes', 2, '9'),
('154', 'Mapuey', 2, '9'),
('155', 'Piñedo', 2, '9'),
('156', 'Samancito', 2, '9'),
('157', 'San Carlos', 2, '9'),
('158', 'Sucre', 2, '9'),
('159', 'Tinaco', 2, '9'),
('160', 'Tinaquillo', 2, '9'),
('161', 'Vallecito', 2, '9'),
('162', 'Tucupita', 2, '10'),
('163', 'Caracas', 2, '25'),
('164', 'El Junquito', 2, '25'),
('165', 'Adícora', 2, '11'),
('166', 'Boca de Aroa', 2, '11'),
('167', 'Cabure', 2, '11'),
('168', 'Capadare', 2, '11'),
('169', 'Capatárida', 2, '11'),
('170', 'Chichiriviche', 2, '11'),
('171', 'Churuguara', 2, '11'),
('172', 'Coro', 2, '11'),
('173', 'Cumarebo', 2, '11'),
('174', 'Dabajuro', 2, '11'),
('175', 'Judibana', 2, '11'),
('176', 'La Cruz de Taratara', 2, '11'),
('177', 'La Vela de Coro', 2, '11'),
('178', 'Los Taques', 2, '11'),
('179', 'Maparari', 2, '11'),
('180', 'Mene de Mauroa', 2, '11'),
('181', 'Mirimire', 2, '11'),
('182', 'Pedregal', 2, '11'),
('183', 'Píritu Falcón', 2, '11'),
('184', 'Pueblo Nuevo Falcón', 2, '11'),
('185', 'Puerto Cumarebo', 2, '11'),
('186', 'Punta Cardón', 2, '11'),
('187', 'Punto Fijo', 2, '11'),
('188', 'San Juan de Los Cayos', 2, '11'),
('189', 'San Luis', 2, '11'),
('190', 'Santa Ana Falcón', 2, '11'),
('191', 'Santa Cruz De Bucaral', 2, '11'),
('192', 'Tocopero', 2, '11'),
('193', 'Tocuyo de La Costa', 2, '11'),
('194', 'Tucacas', 2, '11'),
('195', 'Yaracal', 2, '11'),
('196', 'Altagracia de Orituco', 2, '12'),
('197', 'Cabruta', 2, '12'),
('198', 'Calabozo', 2, '12'),
('199', 'Camaguán', 2, '12'),
('200', 'Chaguaramas Guárico', 2, '12'),
('201', 'El Socorro', 2, '12'),
('202', 'El Sombrero', 2, '12'),
('203', 'Las Mercedes de Los Llanos', 2, '12'),
('204', 'Lezama', 2, '12'),
('205', 'Onoto', 2, '12'),
('206', 'Ortíz', 2, '12'),
('207', 'San José de Guaribe', 2, '12'),
('208', 'San Juan de Los Morros', 2, '12'),
('209', 'San Rafael de Laya', 2, '12'),
('210', 'Santa María de Ipire', 2, '12'),
('211', 'Tucupido', 2, '12'),
('212', 'Valle de La Pascua', 2, '12'),
('213', 'Zaraza', 2, '12'),
('214', 'Aguada Grande', 2, '13'),
('215', 'Atarigua', 2, '13'),
('216', 'Barquisimeto', 2, '13'),
('217', 'Bobare', 2, '13'),
('218', 'Cabudare', 2, '13'),
('219', 'Carora', 2, '13'),
('220', 'Cubiro', 2, '13'),
('221', 'Cují', 2, '13'),
('222', 'Duaca', 2, '13'),
('223', 'El Manzano', 2, '13'),
('224', 'El Tocuyo', 2, '13'),
('225', 'Guaríco', 2, '13'),
('226', 'Humocaro Alto', 2, '13'),
('227', 'Humocaro Bajo', 2, '13'),
('228', 'La Miel', 2, '13'),
('229', 'Moroturo', 2, '13'),
('230', 'Quíbor', 2, '13'),
('231', 'Río Claro', 2, '13'),
('232', 'Sanare', 2, '13'),
('233', 'Santa Inés', 2, '13'),
('234', 'Sarare', 2, '13'),
('235', 'Siquisique', 2, '13'),
('236', 'Tintorero', 2, '13'),
('237', 'Apartaderos Mérida', 2, '14'),
('238', 'Arapuey', 2, '14'),
('239', 'Bailadores', 2, '14'),
('240', 'Caja Seca', 2, '14'),
('241', 'Canaguá', 2, '14'),
('242', 'Chachopo', 2, '14'),
('243', 'Chiguara', 2, '14'),
('244', 'Ejido', 2, '14'),
('245', 'El Vigía', 2, '14'),
('246', 'La Azulita', 2, '14'),
('247', 'La Playa', 2, '14'),
('248', 'Lagunillas Mérida', 2, '14'),
('249', 'Mérida', 2, '14'),
('250', 'Mesa de Bolívar', 2, '14'),
('251', 'Mucuchíes', 2, '14'),
('252', 'Mucujepe', 2, '14'),
('253', 'Mucuruba', 2, '14'),
('254', 'Nueva Bolivia', 2, '14'),
('255', 'Palmarito', 2, '14'),
('256', 'Pueblo Llano', 2, '14'),
('257', 'Santa Cruz de Mora', 2, '14'),
('258', 'Santa Elena de Arenales', 2, '14'),
('259', 'Santo Domingo', 2, '14'),
('260', 'Tabáy', 2, '14'),
('261', 'Timotes', 2, '14'),
('262', 'Torondoy', 2, '14'),
('263', 'Tovar', 2, '14'),
('264', 'Tucani', 2, '14'),
('265', 'Zea', 2, '14'),
('266', 'Araguita', 2, '15'),
('267', 'Carrizal', 2, '15'),
('268', 'Caucagua', 2, '15'),
('269', 'Chaguaramas Miranda', 2, '15'),
('270', 'Charallave', 2, '15'),
('271', 'Chirimena', 2, '15'),
('272', 'Chuspa', 2, '15'),
('273', 'Cúa', 2, '15'),
('274', 'Cupira', 2, '15'),
('275', 'Curiepe', 2, '15'),
('276', 'El Guapo', 2, '15'),
('277', 'El Jarillo', 2, '15'),
('278', 'Filas de Mariche', 2, '15'),
('279', 'Guarenas', 2, '15'),
('280', 'Guatire', 2, '15'),
('281', 'Higuerote', 2, '15'),
('282', 'Los Anaucos', 2, '15'),
('283', 'Los Teques', 2, '15'),
('284', 'Ocumare del Tuy', 2, '15'),
('285', 'Panaquire', 2, '15'),
('286', 'Paracotos', 2, '15'),
('287', 'Río Chico', 2, '15'),
('288', 'San Antonio de Los Altos', 2, '15'),
('289', 'San Diego de Los Altos', 2, '15'),
('290', 'San Fernando del Guapo', 2, '15'),
('291', 'San Francisco de Yare', 2, '15'),
('292', 'San José de Los Altos', 2, '15'),
('293', 'San José de Río Chico', 2, '15'),
('294', 'San Pedro de Los Altos', 2, '15'),
('295', 'Santa Lucía', 2, '15'),
('296', 'Santa Teresa', 2, '15'),
('297', 'Tacarigua de La Laguna', 2, '15'),
('298', 'Tacarigua de Mamporal', 2, '15'),
('299', 'Tácata', 2, '15'),
('300', 'Turumo', 2, '15'),
('301', 'Aguasay', 2, '16'),
('302', 'Aragua de Maturín', 2, '16'),
('303', 'Barrancas del Orinoco', 2, '16'),
('304', 'Caicara de Maturín', 2, '16'),
('305', 'Caripe', 2, '16'),
('306', 'Caripito', 2, '16'),
('307', 'Chaguaramal', 2, '16'),
('308', 'Chaguaramas Monagas', 2, '16'),
('309', 'El Furrial', 2, '16'),
('310', 'El Tejero', 2, '16'),
('311', 'Jusepín', 2, '16'),
('312', 'La Toscana', 2, '16'),
('313', 'Maturín', 2, '16'),
('314', 'Miraflores', 2, '16'),
('315', 'Punta de Mata', 2, '16'),
('316', 'Quiriquire', 2, '16'),
('317', 'San Antonio de Maturín', 2, '16'),
('318', 'San Vicente Monagas', 2, '16'),
('319', 'Santa Bárbara', 2, '16'),
('320', 'Temblador', 2, '16'),
('321', 'Teresen', 2, '16'),
('322', 'Uracoa', 2, '16'),
('323', 'Altagracia', 2, '17'),
('324', 'Boca de Pozo', 2, '17'),
('325', 'Boca de Río', 2, '17'),
('326', 'El Espinal', 2, '17'),
('327', 'El Valle del Espíritu Santo', 2, '17'),
('328', 'El Yaque', 2, '17'),
('329', 'Juangriego', 2, '17'),
('330', 'La Asunción', 2, '17'),
('331', 'La Guardia', 2, '17'),
('332', 'Pampatar', 2, '17'),
('333', 'Porlamar', 2, '17'),
('334', 'Puerto Fermín', 2, '17'),
('335', 'Punta de Piedras', 2, '17'),
('336', 'San Francisco de Macanao', 2, '17'),
('337', 'San Juan Bautista', 2, '17'),
('338', 'San Pedro de Coche', 2, '17'),
('339', 'Santa Ana de Nueva Esparta', 2, '17'),
('340', 'Villa Rosa', 2, '17'),
('341', 'Acarigua', 2, '18'),
('342', 'Agua Blanca', 2, '18'),
('343', 'Araure', 2, '18'),
('344', 'Biscucuy', 2, '18'),
('345', 'Boconoito', 2, '18'),
('346', 'Campo Elías', 2, '18'),
('347', 'Chabasquén', 2, '18'),
('348', 'Guanare', 2, '18'),
('349', 'Guanarito', 2, '18'),
('350', 'La Aparición', 2, '18'),
('351', 'La Misión', 2, '18'),
('352', 'Mesa de Cavacas', 2, '18'),
('353', 'Ospino', 2, '18'),
('354', 'Papelón', 2, '18'),
('355', 'Payara', 2, '18'),
('356', 'Pimpinela', 2, '18'),
('357', 'Píritu de Portuguesa', 2, '18'),
('358', 'San Rafael de Onoto', 2, '18'),
('359', 'Santa Rosalía', 2, '18'),
('360', 'Turén', 2, '18'),
('361', 'Altos de Sucre', 2, '19'),
('362', 'Araya', 2, '19'),
('363', 'Cariaco', 2, '19'),
('364', 'Carúpano', 2, '19'),
('365', 'Casanay', 2, '19'),
('366', 'Cumaná', 2, '19'),
('367', 'Cumanacoa', 2, '19'),
('368', 'El Morro Puerto Santo', 2, '19'),
('369', 'El Pilar', 2, '19'),
('370', 'El Poblado', 2, '19'),
('371', 'Guaca', 2, '19'),
('372', 'Guiria', 2, '19'),
('373', 'Irapa', 2, '19'),
('374', 'Manicuare', 2, '19'),
('375', 'Mariguitar', 2, '19'),
('376', 'Río Caribe', 2, '19'),
('377', 'San Antonio del Golfo', 2, '19'),
('378', 'San José de Aerocuar', 2, '19'),
('379', 'San Vicente de Sucre', 2, '19'),
('380', 'Santa Fe de Sucre', 2, '19'),
('381', 'Tunapuy', 2, '19'),
('382', 'Yaguaraparo', 2, '19'),
('383', 'Yoco', 2, '19'),
('384', 'Abejales', 2, '20'),
('385', 'Borota', 2, '20'),
('386', 'Bramon', 2, '20'),
('387', 'Capacho', 2, '20'),
('388', 'Colón', 2, '20'),
('389', 'Coloncito', 2, '20'),
('390', 'Cordero', 2, '20'),
('391', 'El Cobre', 2, '20'),
('392', 'El Pinal', 2, '20'),
('393', 'Independencia', 2, '20'),
('394', 'La Fría', 2, '20'),
('395', 'La Grita', 2, '20'),
('396', 'La Pedrera', 2, '20'),
('397', 'La Tendida', 2, '20'),
('398', 'Las Delicias', 2, '20'),
('399', 'Las Hernández', 2, '20'),
('400', 'Lobatera', 2, '20'),
('401', 'Michelena', 2, '20'),
('402', 'Palmira', 2, '20'),
('403', 'Pregonero', 2, '20'),
('404', 'Queniquea', 2, '20'),
('405', 'Rubio', 2, '20'),
('406', 'San Antonio del Tachira', 2, '20'),
('407', 'San Cristobal', 2, '20'),
('408', 'San José de Bolívar', 2, '20'),
('409', 'San Josecito', 2, '20'),
('410', 'San Pedro del Río', 2, '20'),
('411', 'Santa Ana Táchira', 2, '20'),
('412', 'Seboruco', 2, '20'),
('413', 'Táriba', 2, '20'),
('414', 'Umuquena', 2, '20'),
('415', 'Ureña', 2, '20'),
('416', 'Batatal', 2, '21'),
('417', 'Betijoque', 2, '21'),
('418', 'Boconó', 2, '21'),
('419', 'Carache', 2, '21'),
('420', 'Chejende', 2, '21'),
('421', 'Cuicas', 2, '21'),
('422', 'El Dividive', 2, '21'),
('423', 'El Jaguito', 2, '21'),
('424', 'Escuque', 2, '21'),
('425', 'Isnotú', 2, '21'),
('426', 'Jajó', 2, '21'),
('427', 'La Ceiba', 2, '21'),
('428', 'La Concepción de Trujllo', 2, '21'),
('429', 'La Mesa de Esnujaque', 2, '21'),
('430', 'La Puerta', 2, '21'),
('431', 'La Quebrada', 2, '21'),
('432', 'Mendoza Fría', 2, '21'),
('433', 'Meseta de Chimpire', 2, '21'),
('434', 'Monay', 2, '21'),
('435', 'Motatán', 2, '21'),
('436', 'Pampán', 2, '21'),
('437', 'Pampanito', 2, '21'),
('438', 'Sabana de Mendoza', 2, '21'),
('439', 'San Lázaro', 2, '21'),
('440', 'Santa Ana de Trujillo', 2, '21'),
('441', 'Tostós', 2, '21'),
('442', 'Trujillo', 2, '21'),
('443', 'Valera', 2, '21'),
('444', 'Carayaca', 2, '22'),
('445', 'Litoral', 2, '22'),
('446', 'Archipiélago Los Roques', 2, '26'),
('447', 'Aroa', 2, '23'),
('448', 'Boraure', 2, '23'),
('449', 'Campo Elías de Yaracuy', 2, '23'),
('450', 'Chivacoa', 2, '23'),
('451', 'Cocorote', 2, '23'),
('452', 'Farriar', 2, '23'),
('453', 'Guama', 2, '23'),
('454', 'Marín', 2, '23'),
('455', 'Nirgua', 2, '23'),
('456', 'Sabana de Parra', 2, '23'),
('457', 'Salom', 2, '23'),
('458', 'San Felipe', 2, '23'),
('459', 'San Pablo de Yaracuy', 2, '23'),
('460', 'Urachiche', 2, '23'),
('461', 'Yaritagua', 2, '23'),
('462', 'Yumare', 2, '23'),
('463', 'Bachaquero', 2, '24'),
('464', 'Bobures', 2, '24'),
('465', 'Cabimas', 2, '24'),
('466', 'Campo Concepción', 2, '24'),
('467', 'Campo Mara', 2, '24'),
('468', 'Campo Rojo', 2, '24'),
('469', 'Carrasquero', 2, '24'),
('470', 'Casigua', 2, '24'),
('471', 'Chiquinquirá', 2, '24'),
('472', 'Ciudad Ojeda', 2, '24'),
('473', 'El Batey', 2, '24'),
('474', 'El Carmelo', 2, '24'),
('475', 'El Chivo', 2, '24'),
('476', 'El Guayabo', 2, '24'),
('477', 'El Mene', 2, '24'),
('478', 'El Venado', 2, '24'),
('479', 'Encontrados', 2, '24'),
('480', 'Gibraltar', 2, '24'),
('481', 'Isla de Toas', 2, '24'),
('482', 'La Concepción del Zulia', 2, '24'),
('483', 'La Paz', 2, '24'),
('484', 'La Sierrita', 2, '24'),
('485', 'Lagunillas del Zulia', 2, '24'),
('486', 'Las Piedras de Perijá', 2, '24'),
('487', 'Los Cortijos', 2, '24'),
('488', 'Machiques', 2, '24'),
('489', 'Maracaibo', 2, '24'),
('490', 'Mene Grande', 2, '24'),
('491', 'Palmarejo', 2, '24'),
('492', 'Paraguaipoa', 2, '24'),
('493', 'Potrerito', 2, '24'),
('494', 'Pueblo Nuevo del Zulia', 2, '24'),
('495', 'Puertos de Altagracia', 2, '24'),
('496', 'Punta Gorda', 2, '24'),
('497', 'Sabaneta de Palma', 2, '24'),
('498', 'San Francisco', 2, '24'),
('499', 'San José de Perijá', 2, '24'),
('500', 'San Rafael del Moján', 2, '24'),
('501', 'San Timoteo', 2, '24'),
('502', 'Santa Bárbara Del Zulia', 2, '24'),
('503', 'Santa Cruz de Mara', 2, '24'),
('504', 'Santa Cruz del Zulia', 2, '24'),
('505', 'Santa Rita', 2, '24'),
('506', 'Sinamaica', 2, '24'),
('507', 'Tamare', 2, '24'),
('508', 'Tía Juana', 2, '24'),
('509', 'Villa del Rosario', 2, '24'),
('510', 'La Guaira', 2, '22'),
('511', 'Catia La Mar', 2, '22'),
('512', 'Macuto', 2, '22'),
('513', 'Naiguatá', 2, '22'),
('514', 'Archipiélago Los Monjes', 2, '26'),
('515', 'Isla La Tortuga y Cayos adyacentes', 2, '26'),
('516', 'Isla La Sola', 2, '26'),
('517', 'Islas Los Testigos', 2, '26'),
('518', 'Islas Los Frailes', 2, '26'),
('519', 'Isla La Orchila', 2, '26'),
('520', 'Archipiélago Las Aves', 2, '26'),
('521', 'Isla de Aves', 2, '26'),
('522', 'Isla La Blanquilla', 2, '26'),
('523', 'Isla de Patos', 2, '26'),
('524', 'Islas Los Hermanos', 2, '26');