## Run

Re-dock enables us to get an instance of Elasticsearch, Kibana and Grafana working, we docker compose in order to launch it:

```bash
$ git clone git@github.com:re-ops/re-dock.git
$ cd re-dock
$ sudo docker-compose up
```

Once running we can set our Re-mote/Re-core instance to point to localhost:9200, the Kibana and Grafana are available under localhost:5607 and localhost:3000 respectively.


Note: Elasticsearch requires the following change in /etc/sysctl.conf:

```bash
vm.max_map_count =  262144
```

## Dashboards
The re-dock/grafana and re-dock/kibana folder contain existing visualizations and dashboard that are ready to import to the running instances, just follow the UI of each tool to import them.
