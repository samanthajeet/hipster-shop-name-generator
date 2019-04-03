select item
from items OFFSET floor(random()* (select count(*) from items)) LIMIT 1