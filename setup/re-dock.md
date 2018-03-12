# Intro 

Re-dock is a fast and easy way to get Elasticsearch, Kibana and Grafana running under docker by using docker-compose, in production you would probably use docker swarm or Kubernatis to achieve higher output and availability.

## Run

We run docker compose to download our images and start the containers:

```bash
$ git clone git@github.com:re-ops/re-dock.git
$ cd re-dock
$ sudo docker-compose up
```

Once running point Re-mote/Re-core to localhost:9200 by changing their configuration invoking the reset function, Kibana and Grafana are available under localhost:5607 and localhost:3000 respectively.


Note: Elasticsearch requires the following change in /etc/sysctl.conf:

```bash
vm.max_map_count =  262144
```

## Dashboards

The source re-dock/grafana and re-dock/kibana folders contain existing visualizations and dashboard that are ready to import into the running ELK instances, follow the UI of each service to import them.
