# Work History

Work Histories are split into summary, tech, and story for easy skimming.

# Let's Go Give - CTO / Co-Founder

### Aug 2020 - Present

#### Summary

- Developed Frontend and backend apps.
- Implemented nix-env/direnv based tooling for lightning fast, and stable
  onboarding on mac and linux.
- Implemented tilt for local development

#### Tech Used

| General                                               | Kubernetes                                         | Major Libraries                         |
| ----------------------------------------------------- | -------------------------------------------------- | --------------------------------------- |
| [Node.js](https://nodejs.org)                         | [Fluxcd](https://fluxcd.io/)                       | [TSed](https://tsed.io/)                |
| [Typescript](https://typescriptlang.org)              | [Kubernetes](https://kubernetes.io/)               | [React](https://reactjs.org/)           |
| [PostgreSQL](https://www.postgresql.org/)             | [Tilt](https://tilt.dev/)                          | [Vite](https://vitejs.dev/)             |
| [Github Actions](https://github.com/features/actions) | [GKE](https://cloud.google.com/kubernetes-engine/) | [Tailwindcss](https://tailwindcss.com/) |
| [direnv](https://direnv.net/)                         | [K3s](https://k3s.io/)                             |
| [nix-env](https://nixos.org/manual/nix/stable/)       | [Kustomize](https://kustomize.io/)                 |

#### Story

I met Ben Wright, my co-founder, in August 2020 and together we started working
on GoGive, A platform for business to easily give charitable donations as gifts
to employees, customers and prospects. I created the entire platform with some
help from others from time to time. The company is completely bootstrapped at
the time of writing this. Every product, tech decision has been made by myself
and my Co-Founder Ben. Solo development is a lot different from developing on a
team, or in a big organization and it has been an amazing learning experience.

# Parakeet / Brivo Inc - Sr. Software Developer

### Aug 2019 - Jun 2021

#### Summary

- Lead team in tech debt remediation
  - Successful migration to kubernetes
  - Successful upgrade from python 2.7 -> 3.9
  - Introduction of python types in repo
  - Reenabled tests during build
- Managed CI/CD system
  - Implemented CI/CD in bitbucket pipelines
  - Auto deploy to QA, migrations, tests
  - Branch deploy for QA testing
- Implemented unified system for complex device models
- Lead several teams on implementation of cryptographic lock technology
- Fixed several "unfixable" bugs
- Instrumented large scale integration framework

#### Tech Used

| General                                                                 | Kubernetes                           |
| ----------------------------------------------------------------------- | ------------------------------------ |
| [Python](https://www.python.org/)                                       | [Kubernetes](https://kubernetes.io/) |
| [Django](https://www.djangoproject.com/)                                | [Pulumi](https://www.pulumi.com/)    |
| [PostgreSQL](https://www.postgresql.org/)                               | [Fluxcd](https://fluxcd.io/)         |
| [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines) | [Helm](https://helm.sh/)             |
| [Amazon AWS](https://aws.amazon.com/)                                   |
| [Let's Encrypt](https://letsencrypt.org/)                               |
| [Small Steps CA](https://smallstep.com/)                                |

#### Story

I joined parakeet to get some more experience working with a small team. When I
got there deployments were pushing code to the servers directly with an scp
command. There was no way to run the entire product on your local machine. The
first thing I did was convert everything to run on kubernetes. It took me three
days to get it working for myself and probably 6 months to get it to be the
defacto way to run the system locally. I used pulumi to ensure local development
differences were configurable. I educated the entire team on kubernetes, and how
to use the tooling locally. This allowed us a testing environment so we could
ship code with confidence.

# Domo, Inc. - Software Engineer

### Mar 2015 - Aug 2019

#### Summary

I tried to keep this list short. There were a lot of other things I did while at
Domo, including stuff I actively maintained, but the list is just too long.

- Kubernetes configuration management platform.
  - Cluster monitoring
  - Contributions to
    [haproxy-ingress](https://github.com/jcmoraisjr/haproxy-ingress) to add
    required functionality
  - Configuration validation system.
- Developer tools to create and destroy entire copies of Domo infrastructure to
  develop services locally.
  - CLI tool used for interacting with the management platform.
  - State capture to retain data between scale-downs.
  - Auto nightly scale down for development environments to reduce cost.
  - Build tools to auto package and templatize docker builds.
- [kube-valet](https://kube-valet.io) auto-scaling and "pack left"
- Performant custom Logging infrastructure with dynamic routing, filtering and
  transformation.
- Automated Cert renewal system.
- Initiative for getting Linux developer laptops approved for use at Domo.
- Caching proxy for [docker registry](https://docs.docker.com/registry/).
- Okta compatible authentication bridge for Kubernetes

#### Tech Used

I know there is a lot in this list, but I have pared this down to the things I
built things with or developed against on a regular basis.

**Languages**

| !no-header!                       | !no-header!                                                        | !no-header!                                     |
| --------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------- |
| [Node.js](https://nodejs.org)     | [Typescript](https://typescriptlang.org)                           | [Golang](https://golang.org)                    |
| [Ruby](https://ruby-lang.org)     | [Javascript](https://developer.mozilla.org/bm/docs/Web/JavaScript) | [Java](https://www.oracle.com/technetwork/java) |
| [Python](https://www.python.org/) | [Scala](https://www.scala-lang.org/)                               | [BASH](https://www.gnu.org/software/bash/)      |

**Major Libraries**

| !no-header!                   | !no-header!                       | !no-header!                         |
| ----------------------------- | --------------------------------- | ----------------------------------- |
| [Spring](https://spring.io/)  | [Express](https://expressjs.com/) | [Yargs](http://yargs.js.org/)       |
| [React](https://reactjs.org/) | [Inversify](http://inversify.io/) | [Electron](https://electronjs.org/) |

**Clouds**

| !no-header!                               | !no-header!                                    | !no-header!                                           |
| ----------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| [Google Cloud](https://cloud.google.com/) | [Amazon Web Services](https://aws.amazon.com/) | [Microsoft Azure](https://azure.microsoft.com/en-us/) |

**Developer Tools**

| !no-header!                               | !no-header!                                          | !no-header!                          |
| ----------------------------------------- | ---------------------------------------------------- | ------------------------------------ |
| [Linux](https://www.linuxfoundation.org/) | [Visual Studio Code](https://code.visualstudio.com/) | [tmux](https://github.com/tmux/tmux) |
| [K3s](https://k3s.io/)                    | [vim](https://www.vim.org/)                          | [Jenkins](https://jenkins.io/)       |
| [Gradle](https://gradle.org/)             | [gulp](https://gulpjs.com/)                          | [Docker](https://www.docker.com/)    |

**Other Tools and Services**

| !no-header!                              | !no-header!                                      | !no-header!                                                                  |
| ---------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------- |
| [Kubernetes](https://kubernetes.io/)     | [Fluentd](https://www.fluentd.org/)              | [ElasticSearch](https://www.elastic.co/)                                     |
| [Grafana](https://grafana.com/)          | [Kibana](https://www.elastic.co/products/kibana) | [Alert Manager](https://prometheus.io/docs/alerting/alertmanager/)           |
| [HAProxy](https://www.haproxy.org/)      | [Nginx](https://www.nginx.com/)                  | [Prometheus](https://prometheus.io/)                                         |
| [Sumo Logic](https://www.sumologic.com/) | [Let's Encrypt](https://letsencrypt.org/)        | [Okta](https://www.okta.com/)                                                |
| [Gogs](https://gogs.io/)                 | [Salt](https://www.saltstack.com/)               | [Spring Cloud Config Server](https://spring.io/projects/spring-cloud-config) |

#### Story

I got hired at Domo in the QA department. One of the developers was confused as
to why I wanted to be in the QA department when I had so much experience with
writing software. I told him that it's because I enjoy automating things and
writing developer tools. It turns out that being in QA and doing what I have
done is unusual in some places. QA at Domo ended up not being a great fit for
me. I switched over to the Delivery Engineering team A.K.A. Voltron. There I
designed and built an internal product that replaced developer environments
previously run on a local VM with a LOT of swap space. The new product runs on
Kubernetes and manages about 60 or so custom developer environments every day,
spinning nodes up and down as resources are needed. It is currently slated to
replace the production environments as well. I also facilitated many migrations
within the company, and wrote about 15 or so micro-services used to support the
Kubernetes infrastructure. I also built an auto updating Electron/Node.js based
CLI application that among other things, tunneled a developer's laptop into
their environment, authenticated kubectl commands, provided a GUI interface to
the environment, and created and destroyed the "leased" environments.

# Jive Communications - Developer of Awesome

### Dec 2013 - Mar 2015

#### Summary

- WebSocket implementation of custom TCP messaging transport called JiveWire.
- Javascript port of JiveWire.
- Phone automation system using RaspberryPi boards to connect to SIP Phones to
  automate testing of the phones.
- Server to manage "checkouts" of test phones using
  [bankers algorithm](https://en.wikipedia.org/wiki/Banker%27s_algorithm) to
  prevent deadlocks in automated tests.
- Messaging transport to send commands to phones while "checked out".
- Software used to spin up dependencies of services for integration tests.
- Implementation of various angular bits for the new company platform.

#### Tech Used

| !no-header! | !no-header! | !no-header! |
| ----------- | ----------- | ----------- |
| Node.js     | javascript  | Java        |
| Guice       | Jetty       | Maven       |
| Jenkins     | Angular 1   | RaspberryPi |
| MacOS       | Linux       | WebSockets  |
| BeagleBone  | PostgreSQL  | SIP Phones  |
| Lombok      | Intellij    | Eclipse     |
| Docker      |

#### Story

When I started at Jive Communications I was hired to build an automated testing
platform to make physical SIP phones interact with the development environment
to ensure edge case test coverage. SIP phones rely on the SIP standard to
communicate. However, often manufacturers will deviate from the standard to add
intentional incompatibility or add competitive features. This system was devised
to just use actual phones instead of guessing how they worked. A Simple test
involved checking out two phones, making one dial the other, converting text to
speech, playing the audio over the microphone of one phone while the other
recorded audio going over the ear piece, converting speech to text and comparing
the end result text to the text used at the beginning (whew). I ended up
developing the system largely on my own due to shifting resources. In case you
were wondering, yes "Developer of Awesome" was my official title. I put it on my
loan application for the house I bought while employed there.

# Novarad - Lead Automation Engineer

### May 2012 - Dec 2013

#### Summary

- Automated tests, testing frameworks and reporting systems.
- Links between automated test results to Microsoft Test Manager.
- Software to run distributed tests across multiple windows machines.
- End to end [HL7](https://www.hl7.org/) testing framework used to automate
  tests that had been manual for years.
- Database integration test framework and tests used to ensure quality through a
  large migration from MSSql to Postgresql.
- Test harnesses for starting up databases and other services on laptops
  automatically.

#### Tech Used

| !no-header!            | !no-header!    | !no-header!            |
| ---------------------- | -------------- | ---------------------- |
| Windows                | Visual Studio  | CodedUI                |
| Team Foundation Server | MSSQL          | PostgreSQL             |
| C#                     | HL7            | Javascript             |
| IIS                    | Windows Server | Microsoft Test Manager |

#### Story

At Novarad I joined as a QA Test Intern one semester into the Computer Science
program at UVU. I had been learning C# and Novarad's platform was written mostly
in C#. I got really tired of running the same tests over and over again
manually. I enlisted to help with writing automated testing with
[CodedUI](https://docs.microsoft.com/en-us/visualstudio/test/use-ui-automation-to-test-your-code?view=vs-2019)
([Selenium](https://www.seleniumhq.org/) for Windows programs and Internet
Explorer).I proposed that we start taking screenshots of the most unchanging
parts of the application to assert whether or not something had changed. Later
when the results came in we could assess if those changes had been intended or
not. I was way out of my depth, but I managed to pull it off. After a while the
only other test engineer working on automation moved to development. I took over
the automated testing program for the next year and added two more interns to my
team before moving to Jive Communications.
