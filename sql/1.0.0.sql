--- CLASSES ---
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L1 MI G2','L1MIG2','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L1 MI G3','L1MIG3','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L1 MI G4','L1MIG4','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L1 MI G5','L1MIG5','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L1 MI G6','L1MIG6','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');

INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L2 INFO G1','L2INFOG1','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L2 INFO G2','L2INFOG2','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L2 INFO G3','L2INFOG3','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L2 INFO G4','L2INFOG4','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');

INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L3 SA','L3SA','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L3 SR','L3SR','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L3 MIAGE I.','L3MIAGE','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L3 MIAGE A.','L3MIAGEA','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('L3 DOUBLE','L3DOUBLE','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');

INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 INFO G1','M1INFOG1','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 INFO G2','M1INFOG2','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 INFO SA','M1INFOSA','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 INFO SR','M1INFOSR','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');

INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 MIAGE I.','M1MIAGE','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 MIAGE A.','M1MIAGEA','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');

INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M2 MIAGE I.','M2MIAGE','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M2 MIAGE A.','M2MIAGEA','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');

INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 INFO G1','M1INFOG1','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 INFO G2','M1INFOG2','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 INFO SA','M1INFOSA','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');
INSERT INTO dll.classes (nom,code,createdAt,updatedAt)
	VALUES ('M1 INFO SR','M1INFOSR','2020-11-09 10:17:35.752','2020-11-09 10:17:37.255');

--- USERS ---
INSERT INTO dll.users
(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion)
VALUES('Didier', 'Courtaud', 'dcourtaud', 'TEACHER', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'dcourtaud@etud.univ-evry.fr', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('Dupuy', 'Remi', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'dupuyremi@outlook.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('SEFFER', 'Loic', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'seffer.loic@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('LAIOLO', 'Louis', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'louis.laiolo@hotmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('DIEDHOU', 'Ndeye Marieme', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'ps.marieme95@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('MOUTAOUKIL', 'Soukayna', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'moutaoukilsoukayna@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('LUNDI', 'Marion', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'lundi.marion@free.fr', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('HOURAGA', 'Lauraine', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'houraga1@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('BOUBEKEUR', 'Rabah', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'rabahboubekeur6@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('DE BRUYNE', 'Alexis', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'alexis.de.bruyne@outlook.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('LECELLIER', 'Laetitia', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'laetitia.lecellier@free.fr', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('AMARA', 'Samir', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'samirq2@outlook.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('LAHKIKY', 'Achraf', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'achraf.pica@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('TIMOR', 'brahim', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'brahim.timor@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('JAA', 'Yassine', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'yassine.jaa.pro@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('JESIOLOWSKI', 'Melvin', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'jesiolowski.melvin@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('VANDENSCHRICK', 'David', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'dvandenschrick@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('FERREIRA', 'Elodie', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'elodief17@hotmail.fr', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('DIARRA', 'Yannis', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'yd97@hotmail.fr', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('FRUTEAU', 'Pierre Alexandre', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'alexandre.fruteau@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('Hamidi', 'Badr', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'badr.hamidi.31@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('BOUCAUD', 'Jayson', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'boucaud.jayson@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('KASSY', 'Anis', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'aniskassy@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('MEDDOURI', 'Badis', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'meddouri.badis@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('DESSEUX', 'Valentin', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'Valentin.desseux@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('MOUHAMAD', 'Faizan', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'fmouhamad@hotmail.fr', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('SATTIANARAYANANE', 'Dhinesh', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'sattia.dhinesh@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('AIT MOHAMMED', 'Malha', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'contactmalha@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('BOUDA', 'Azzeddine', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'azzedineforyou@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('SMAIL', 'Massinissa', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'smail.massinissa97@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
INSERT INTO dll.users(firstName, lastName, username, `role`, hash, email, numEtud, createdAt, updatedAt, id_classe, id_gestion) VALUES('NAIT SLIMANE', 'Fares', 'undefined', 'STUDENT', '$2a$10$LTfCUKp.hHzLYBAwGAGbTuU56v8rgo67/lvzgZsqK9xQWoSZvvVxu', 'faresns45@gmail.com', '20182098', '2020-11-09 09:30:19.0', '2020-11-09 09:30:19.0', NULL, NULL);
