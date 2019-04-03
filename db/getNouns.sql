select noun
from noun1 OFFSET floor(random()* (select count(*) from noun1)) LIMIT 1;