select adjective
from adjective OFFSET floor(random()* (select count(*) from adjective)) LIMIT 1