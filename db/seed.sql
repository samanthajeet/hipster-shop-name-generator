insert into noun1 (noun)
values('pickles'),
('baseball'),
('home'),
('feather'),
('dog'),
('school'),
('planet'),
('tree'),
('hair'),
('mug'),
('beanie'),
('hightop'),
('arrow'),
('vanilla'),
('vinyl'),
('mustache'),
('teepee'),
('catmaran'),
('bastion'),
('shoppe'),
('carabou'),
('wolf'),
('bud'),
('leaf'),
('coral')


create table adjective(
    id serial primary key,
    adjective varChar(50)
)

insert into adjective(adjective)
values
('Vanilla'),
('Vintage'),
('Weatherd'),
('Dope'),
('Dank'),
('Sicc'),
('Artisinal'),
('Ethically sourced'),
('Parisian'),
('Bohemian'),
('Native'),
('GMO free'),
('Locally sourced'),
('Vegan'),
('Organic'),
('Destructured'),
('Distressed'),
('Droll'),
('Infused')



create table items(
    id serial primary key not null,
    item varChar(100)
)

insert into items(item)
values
('Chalkboard Signs'),
('Jewelry'),
('Candles'),
('Iceland Ice'),
('Watter Bottles'),
('Housewares'),
('Mugs'),
('Succulents'),
('Whiskey Accessories'),
('Bacon'),
('Neon Signs'),
('Key Chains'),
('Vinyl Records'),
('Mason Jars'),
('Tote Bags'),
('Chocolate'),
('Vape Pens'),
('Beanies'),
('Bow Ties'),
('Man Bun Accessories')