Instruction
-------------------
1. Change your nginx conf file like this

		sudo nano /etc/nginx/sites-available/default

		upstream app_example {
		    least_conn;                 # Use Least Connections strategy
		    server 127.0.0.1:9000;      # NodeJS Server 1
		    server 127.0.0.1:9001;      # NodeJS Server 2
		    server 127.0.0.1:9002;      # NodeJS Server 3
		    server 127.0.0.1:9003;
		    server 127.0.0.1:9004;
		    server 127.0.0.1:9005;
		}

		server {
			location / {
				proxy_pass  http://app_example;
				try_files $uri $uri/ =404;
			}
		}

2. sudo service nginx restart

3. check in browser http://localhost


You can use upstream like this
----------------------------------

	upstream app_example  {
	  server backend1.example.com;
	  server backend2.example.com;
	  server backend3.example.com;
	}

	     OR

	upstream app_example {
	   ip_hash;
	   server 10.1.0.101; 
	   server 10.1.0.102;
	   server 10.1.0.103;
	} 

	    OR
	upstream backend {
	   server 10.1.0.101 weight=4; 
	   server 10.1.0.102 weight=2;
	   server 10.1.0.103;
	}
