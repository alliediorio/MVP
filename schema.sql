DROP DATABASE nationalParks;
CREATE DATABASE nationalParks;
USE nationalParks;

CREATE TABLE  parks (
  id int NOT NULL AUTO_INCREMENT,
  park varchar(100) NOT NULL,
  loc varchar(12) NOT NULL,
  code varchar(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT into parks (park, loc, code) VALUES ('Little River Canyon National Preserve', 'AL', 'liri');
INSERT into parks (park, loc, code) VALUES ('Denali National Park', 'AK', 'dena');
INSERT into parks (park, loc, code) VALUES ('Grand Canyon National Park', 'AZ', 'grca');
INSERT into parks (park, loc, code) VALUES ('Hot Springs National Park', 'AR', 'hosp');
INSERT into parks (park, loc, code) VALUES ('Yosemite National Park', 'CA', 'yose');
INSERT into parks (park, loc, code) VALUES ('Rocky Mountain National Park', 'CO', 'romo');
-- INSERT into parks (park, loc, code) VALUES ('Coltsville National Historical Park', 'CT', 'colt');
-- INSERT into parks (park, loc, code) VALUES ('First State National Historical Park', 'DE', 'frst');
INSERT into parks (park, loc, code) VALUES ('Everglades National Park', 'FL', 'ever');
INSERT into parks (park, loc, code) VALUES ('Appalachian National Scenic Trail Southern Starting Point', 'GA', 'appa');

INSERT into parks (park, loc, code) VALUES ('Haleakala National Park', 'HI', 'hale');
-- INSERT into parks (park, loc, code) VALUES ('City Of Rocks National Reserve', 'ID', 'ciro');
-- INSERT into parks (park, loc, code) VALUES ('Lincoln Home National Historic Site', 'IL', 'liho');
INSERT into parks (park, loc, code) VALUES ('Dunes National Park', 'IN', 'indu');
-- INSERT into parks (park, loc, code) VALUES ('Effigy Mounds National Monument', 'IA', 'efmo');
-- INSERT into parks (park, loc, code) VALUES ('Tallgrass Prairie National Preserve', 'KS', 'tapr');
INSERT into parks (park, loc, code) VALUES ('Mammoth Cave National Park', 'KY', 'maca');
-- INSERT into parks (park, loc, code) VALUES ('Cane River Creole National Historical Park', 'LA', 'cari');
INSERT into parks (park, loc, code) VALUES ('Acadia National Park', 'ME', 'acad');
-- INSERT into parks (park, loc, code) VALUES ('Antietam National Battlefield', 'MD', 'anti');

-- INSERT into parks (park, loc, code) VALUES ('Cape Cod National Seashore', 'MA', 'caco');
-- INSERT into parks (park, loc, code) VALUES ('Isle Royale National Park', 'MI', 'isro');
INSERT into parks (park, loc, code) VALUES ('Voyageurs National Park', 'MN', 'voya');
-- INSERT into parks (park, loc, code) VALUES ('Natchez National Historical Park', 'MS', 'natc');
-- INSERT into parks (park, loc, code) VALUES ('Gateway Arch National Park', 'MO', 'jeff');
INSERT into parks (park, loc, code) VALUES ('Glacier National Park', 'MT', 'glac');
-- INSERT into parks (park, loc, code) VALUES ('Niobrara National Scenic River', 'NE', 'niob');
INSERT into parks (park, loc, code) VALUES ('Death Valley National Park', 'NV', 'deva');
-- INSERT into parks (park, loc, code) VALUES ('Homestead National Historical Park', 'NH', 'home');
-- INSERT into parks (park, loc, code) VALUES ('Great Egg Harbor River', 'NJ', 'greg');

INSERT into parks (park, loc, code) VALUES ('White Sands National Park', 'NM', 'whsa');
INSERT into parks (park, loc, code) VALUES ('Catskills', 'NY', '');
-- INSERT into parks (park, loc, code) VALUES ('Cape Hatteras National Seashore', 'NC', 'caha');
-- INSERT into parks (park, loc, code) VALUES ('Theodore Roosevelt National Park', 'ND', 'thro');
-- INSERT into parks (park, loc, code) VALUES ('Cuyahoga Valley National Park', 'OH', 'cuva');
-- INSERT into parks (park, loc, code) VALUES ('Chickasaw National Recreation Area', 'OK', 'chic');
INSERT into parks (park, loc, code) VALUES ('Crater Lake National Park', 'OR', 'crla');
-- INSERT into parks (park, loc, code) VALUES ('Gettysburg National Military Park', 'PA', 'gett');
-- INSERT into parks (park, loc, code) VALUES ('Blackstone River Valley National Historical Park', 'RI', 'blrv');
-- INSERT into parks (park, loc, code) VALUES ('Congaree National Park', 'SC', 'cong');

-- INSERT into parks (park, loc, code) VALUES ('Badlands National Park', 'SD', 'badl');
-- INSERT into parks (park, loc, code) VALUES ('Big South Fork National River & Recreation Area', 'TN', 'biso');
INSERT into parks (park, loc, code) VALUES ('Big Bend National Park', 'TX', 'bibe');
INSERT into parks (park, loc, code) VALUES ('Arches National Park', 'UT', 'arch');
-- INSERT into parks (park, loc, code) VALUES ('Marsh - Billings - Rockefeller National Historical Park', 'VT', 'mabi');
-- INSERT into parks (park, loc, code) VALUES ('Shenandoah National Park', 'VA', 'shen');
INSERT into parks (park, loc, code) VALUES ('Mount Ranier National Park', 'WA', 'mora');
-- INSERT into parks (park, loc, code) VALUES ('New River Gorge National Park', 'WV', 'neri');
-- INSERT into parks (park, loc, code) VALUES ('Apostle Islands National Lakeshore', 'WI', 'apis');
INSERT into parks (park, loc, code) VALUES ('Grand Teton National Park', 'WY', 'grte');


-- was working with these 5
-- INSERT into parks (park, loc, code) VALUES ('Denali National Park', 'AK', 'dena');
-- INSERT into parks (park, loc, code) VALUES ('White Sands National Park', 'NM', 'whsa');
-- INSERT into parks (park, loc, code) VALUES ('Yosemite National Park', 'CA', 'yose');
-- INSERT into parks (park, loc, code) VALUES ('Glacier National Park', 'MT', 'glac');
-- INSERT into parks (park, loc, code) VALUES ('Acadia National Park', 'ME', 'acad');