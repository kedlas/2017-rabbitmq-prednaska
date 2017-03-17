# "Asynchronní integrace aplikací - RabbitMQ"
## Tomáš Sedláček

### Symfony sraz Hradec Králové, březen 2017
Prezentace dostupná na adrese: https://prezi.com/p0gzzfnolbr4/asynchronni-integrace-aplikaci-rabbitmq/
Všechny zdrojové kódy jsou v tomto repozitáři. 

### RabbitMQ prostředí:

Spuštění docker kontejneru:
docker run -d --hostname my-rabbit -p 15672:15672 -p 5672:5672 --name my-rabbit rabbitmq:3-management-alpine

Zkontrolujeme, zda instance RabbitMQ beží:
docker exec -ti my-rabbit rabbitmqctl status

RabbitMQ management frontend by měl být dostupný na adrese:
http://host:15672/ (e.g.: http://localhost:15672/#/)

### Demo Sorter/Resequencer

```
$ https://github.com/kedlas/2017-rabbitmq-prednaska.git
$ cd 2017-rabbitmq-prednaska
$ npm install
$ cd src
$ node consumer.js simple|sorter|resequencer

$ node publisher.js
```
