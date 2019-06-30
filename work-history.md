# Work History

Work Histories are split into summary, tech, and story for easy skimming.

# Domo, Inc. - Software Engineer

### Mar 2015 - Present

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
