(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{384:function(s,a,e){"use strict";e.r(a);var t=e(26),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes搭建高可用集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes搭建高可用集群"}},[s._v("#")]),s._v(" Kubernetes搭建高可用集群")]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("之前我们搭建的集群，只有一个master节点，当master节点宕机的时候，通过node将无法继续访问，而master主要是管理作用，所以整个集群将无法提供服务")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201121164522945.png",alt:"image-20201121164522945"}})]),s._v(" "),e("h2",{attrs:{id:"高可用集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高可用集群"}},[s._v("#")]),s._v(" 高可用集群")]),s._v(" "),e("p",[s._v("下面我们就需要搭建一个多master节点的高可用集群，不会存在单点故障问题")]),s._v(" "),e("p",[s._v("但是在node 和 master节点之间，需要存在一个 LoadBalancer组件，作用如下：")]),s._v(" "),e("ul",[e("li",[s._v("负载")]),s._v(" "),e("li",[s._v("检查master节点的状态")])]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201121164931760.png",alt:"image-20201121164931760"}})]),s._v(" "),e("p",[s._v("对外有一个统一的VIP：虚拟ip来对外进行访问")]),s._v(" "),e("h2",{attrs:{id:"高可用集群技术细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高可用集群技术细节"}},[s._v("#")]),s._v(" 高可用集群技术细节")]),s._v(" "),e("p",[s._v("高可用集群技术细节如下所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201121165325194.png",alt:"image-20201121165325194"}})]),s._v(" "),e("ul",[e("li",[s._v("keepalived：配置虚拟ip，检查节点的状态")]),s._v(" "),e("li",[s._v("haproxy：负载均衡服务【类似于nginx】")]),s._v(" "),e("li",[s._v("apiserver：")]),s._v(" "),e("li",[s._v("controller：")]),s._v(" "),e("li",[s._v("manager：")]),s._v(" "),e("li",[s._v("scheduler：")])]),s._v(" "),e("h2",{attrs:{id:"高可用集群步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高可用集群步骤"}},[s._v("#")]),s._v(" 高可用集群步骤")]),s._v(" "),e("p",[s._v("我们采用2个master节点，一个node节点来搭建高可用集群，下面给出了每个节点需要做的事情")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201121170351461.png",alt:"image-20201121170351461"}})]),s._v(" "),e("h2",{attrs:{id:"初始化操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化操作"}},[s._v("#")]),s._v(" 初始化操作")]),s._v(" "),e("p",[s._v("我们需要在这三个节点上进行操作")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\nsystemctl stop firewalld\nsystemctl disable firewalld\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭selinux")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/enforcing/disabled/'")]),s._v(" /etc/selinux/config  \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时关闭")]),s._v("\nsetenforce "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭swap")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时")]),s._v("\nswapoff -a \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -ri "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/.*swap.*/#&/'")]),s._v(" /etc/fstab\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据规划设置主机名【master1节点上操作】")]),s._v("\nhostnamectl set-hostname master1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据规划设置主机名【master2节点上操作】")]),s._v("\nhostnamectl set-hostname master1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据规划设置主机名【node1节点操作】")]),s._v("\nhostnamectl set-hostname node1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# r添加hosts")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n192.168.44.158  k8smaster\n192.168.44.155 master01.k8s.io master1\n192.168.44.156 master02.k8s.io master2\n192.168.44.157 node01.k8s.io node1\nEOF")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将桥接的IPv4流量传递到iptables的链【3个节点上都执行】")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/sysctl.d/k8s.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生效")]),s._v("\nsysctl --system  \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间同步")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntpdate -y\nntpdate time.windows.com\n")])])]),e("h2",{attrs:{id:"部署keepalived"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署keepalived"}},[s._v("#")]),s._v(" 部署keepAlived")]),s._v(" "),e("p",[s._v("下面我们需要在所有的master节点【master1和master2】上部署keepAlive")]),s._v(" "),e("h3",{attrs:{id:"安装相关包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装相关包"}},[s._v("#")]),s._v(" 安装相关包")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装相关工具")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y conntrack-tools libseccomp libtool-ltdl\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装keepalived")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y keepalived\n")])])]),e("h3",{attrs:{id:"配置master节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置master节点"}},[s._v("#")]),s._v(" 配置master节点")]),s._v(" "),e("p",[s._v("添加master1的配置")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/keepalived/keepalived.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF \n! Configuration File for keepalived\n\nglobal_defs {\n   router_id k8s\n}\n\nvrrp_script check_haproxy {\n    script "killall -0 haproxy"\n    interval 3\n    weight -2\n    fall 10\n    rise 2\n}\n\nvrrp_instance VI_1 {\n    state MASTER \n    interface ens33 \n    virtual_router_id 51\n    priority 250\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass ceb1b3ec013d66163d6ab\n    }\n    virtual_ipaddress {\n        192.168.44.158\n    }\n    track_script {\n        check_haproxy\n    }\n\n}\nEOF')]),s._v("\n")])])]),e("p",[s._v("添加master2的配置")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/keepalived/keepalived.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF \n! Configuration File for keepalived\n\nglobal_defs {\n   router_id k8s\n}\n\nvrrp_script check_haproxy {\n    script "killall -0 haproxy"\n    interval 3\n    weight -2\n    fall 10\n    rise 2\n}\n\nvrrp_instance VI_1 {\n    state BACKUP \n    interface ens33 \n    virtual_router_id 51\n    priority 200\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass ceb1b3ec013d66163d6ab\n    }\n    virtual_ipaddress {\n        192.168.44.158\n    }\n    track_script {\n        check_haproxy\n    }\n\n}\nEOF')]),s._v("\n")])])]),e("h3",{attrs:{id:"启动和检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动和检查"}},[s._v("#")]),s._v(" 启动和检查")]),s._v(" "),e("p",[s._v("在两台master节点都执行")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动keepalived")]),s._v("\nsystemctl start keepalived.service\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" keepalived.service\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看启动状态")]),s._v("\nsystemctl status keepalived.service\n")])])]),e("p",[s._v("启动后查看master的网卡信息")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" a s ens33\n")])])]),e("p",[e("img",{attrs:{src:"images/image-20201121171619497.png",alt:"image-20201121171619497"}})]),s._v(" "),e("h2",{attrs:{id:"部署haproxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署haproxy"}},[s._v("#")]),s._v(" 部署haproxy")]),s._v(" "),e("p",[s._v("haproxy主要做负载的作用，将我们的请求分担到不同的node节点上")]),s._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[s._v("在两个master节点安装 haproxy")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装haproxy")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y haproxy\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 haproxy")]),s._v("\nsystemctl start haproxy\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启自启")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" haproxy\n")])])]),e("p",[s._v("启动后，我们查看对应的端口是否包含 16443")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tunlp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" haproxy\n")])])]),e("p",[e("img",{attrs:{src:"images/image-20201121181803128.png",alt:"image-20201121181803128"}})]),s._v(" "),e("h3",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),e("p",[s._v("两台master节点的配置均相同，配置中声明了后端代理的两个master节点服务器，指定了haproxy运行的端口为16443等，因此16443端口为集群的入口")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/haproxy/haproxy.cfg "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n#---------------------------------------------------------------------\n# Global settings\n#---------------------------------------------------------------------\nglobal\n    # to have these messages end up in /var/log/haproxy.log you will\n    # need to:\n    # 1) configure syslog to accept network log events.  This is done\n    #    by adding the '-r' option to the SYSLOGD_OPTIONS in\n    #    /etc/sysconfig/syslog\n    # 2) configure local2 events to go to the /var/log/haproxy.log\n    #   file. A line like the following can be added to\n    #   /etc/sysconfig/syslog\n    #\n    #    local2.*                       /var/log/haproxy.log\n    #\n    log         127.0.0.1 local2\n    \n    chroot      /var/lib/haproxy\n    pidfile     /var/run/haproxy.pid\n    maxconn     4000\n    user        haproxy\n    group       haproxy\n    daemon \n       \n    # turn on stats unix socket\n    stats socket /var/lib/haproxy/stats\n#---------------------------------------------------------------------\n# common defaults that all the 'listen' and 'backend' sections will\n# use if not designated in their block\n#---------------------------------------------------------------------  \ndefaults\n    mode                    http\n    log                     global\n    option                  httplog\n    option                  dontlognull\n    option http-server-close\n    option forwardfor       except 127.0.0.0/8\n    option                  redispatch\n    retries                 3\n    timeout http-request    10s\n    timeout queue           1m\n    timeout connect         10s\n    timeout client          1m\n    timeout server          1m\n    timeout http-keep-alive 10s\n    timeout check           10s\n    maxconn                 3000\n#---------------------------------------------------------------------\n# kubernetes apiserver frontend which proxys to the backends\n#--------------------------------------------------------------------- \nfrontend kubernetes-apiserver\n    mode                 tcp\n    bind                 *:16443\n    option               tcplog\n    default_backend      kubernetes-apiserver    \n#---------------------------------------------------------------------\n# round robin balancing between the various backends\n#---------------------------------------------------------------------\nbackend kubernetes-apiserver\n    mode        tcp\n    balance     roundrobin\n    server      master01.k8s.io   192.168.44.155:6443 check\n    server      master02.k8s.io   192.168.44.156:6443 check\n#---------------------------------------------------------------------\n# collection haproxy statistics message\n#---------------------------------------------------------------------\nlisten stats\n    bind                 *:1080\n    stats auth           admin:awesomePassword\n    stats refresh        5s\n    stats realm          HAProxy\\ Statistics\n    stats uri            /admin?stats\nEOF")]),s._v("\n")])])]),e("h2",{attrs:{id:"安装docker、kubeadm、kubectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装docker、kubeadm、kubectl"}},[s._v("#")]),s._v(" 安装Docker、Kubeadm、kubectl")]),s._v(" "),e("p",[s._v("所有节点安装Docker/kubeadm/kubelet ，Kubernetes默认CRI（容器运行时）为Docker，因此先安装Docker")]),s._v(" "),e("h3",{attrs:{id:"安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),e("p",[s._v("首先配置一下Docker的阿里yum源")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/yum.repos.d/docker.repo"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[docker-ce-edge]\nname=Docker CE Edge - \\"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("\nbaseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\\"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/edge\nenabled=1\ngpgcheck=1\ngpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg\nEOF")]),s._v("\n")])])]),e("p",[s._v("然后yum方式安装docker")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum安装")]),s._v("\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看docker版本")]),s._v("\ndocker --version  \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\nsystemctl start docker\n")])])]),e("p",[s._v("配置docker的镜像源")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/docker/daemon.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n")])])]),e("p",[s._v("然后重启docker")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("systemctl restart docker\n")])])]),e("h3",{attrs:{id:"添加kubernetes软件源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加kubernetes软件源"}},[s._v("#")]),s._v(" 添加kubernetes软件源")]),s._v(" "),e("p",[s._v("然后我们还需要配置一下yum的k8s软件源")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/yum.repos.d/kubernetes.repo "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=0\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF")]),s._v("\n")])])]),e("h3",{attrs:{id:"安装kubeadm-kubelet和kubectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装kubeadm-kubelet和kubectl"}},[s._v("#")]),s._v(" 安装kubeadm，kubelet和kubectl")]),s._v(" "),e("p",[s._v("由于版本更新频繁，这里指定版本号部署：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装kubelet、kubeadm、kubectl，同时指定版本")]),s._v("\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kubelet\n")])])]),e("h2",{attrs:{id:"部署kubernetes-master【master节点】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署kubernetes-master【master节点】"}},[s._v("#")]),s._v(" 部署Kubernetes Master【master节点】")]),s._v(" "),e("h3",{attrs:{id:"创建kubeadm配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建kubeadm配置文件"}},[s._v("#")]),s._v(" 创建kubeadm配置文件")]),s._v(" "),e("p",[s._v("在具有vip的master上进行初始化操作，这里为master1")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建文件夹")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/kubernetes/manifests -p\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 到manifests目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/kubernetes/manifests/\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建yaml文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" kubeadm-config.yaml\n")])])]),e("p",[s._v("yaml内容如下所示：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("apiServer:\n  certSANs:\n    - master1\n    - master2\n    - master.k8s.io\n    - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".44.158\n    - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".44.155\n    - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".44.156\n    - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n  extraArgs:\n    authorization-mode: Node,RBAC\n  timeoutForControlPlane: 4m0s\napiVersion: kubeadm.k8s.io/v1beta1\ncertificatesDir: /etc/kubernetes/pki\nclusterName: kubernetes\ncontrolPlaneEndpoint: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"master.k8s.io:16443"')]),s._v("\ncontrollerManager: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ndns: \n  type: CoreDNS\netcd:\n  local:    \n    dataDir: /var/lib/etcd\nimageRepository: registry.aliyuncs.com/google_containers\nkind: ClusterConfiguration\nkubernetesVersion: v1.16.3\nnetworking: \n  dnsDomain: cluster.local  \n  podSubnet: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16\n  serviceSubnet: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".0.0/16\nscheduler: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("然后我们在 master1 节点执行")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubeadm init --config kubeadm-config.yaml\n")])])]),e("p",[s._v("执行完成后，就会在拉取我们的进行了【需要等待...】")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/image-20201121194928988.png",alt:"image-20201121194928988"}})]),s._v(" "),e("p",[s._v("按照提示配置环境变量，使用kubectl工具")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行下方命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看节点")]),s._v("\nkubectl get nodes\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看pod")]),s._v("\nkubectl get pods -n kube-system\n")])])]),e("p",[e("strong",[s._v("按照提示保存以下内容，一会要使用：")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubeadm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" master.k8s.io:16443 --token jv5z7n.3y1zi95p952y9p65 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --discovery-token-ca-cert-hash sha256:403bca185c2f3a4791685013499e7ce58f9848e2213e27194b75a2e3293d8812 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --control-plane \n")])])]),e("blockquote",[e("p",[s._v("--control-plane ： 只有在添加master节点的时候才有")])]),s._v(" "),e("p",[s._v("查看集群状态")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群状态")]),s._v("\nkubectl get cs\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看pod")]),s._v("\nkubectl get pods -n kube-system\n")])])]),e("h2",{attrs:{id:"安装集群网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装集群网络"}},[s._v("#")]),s._v(" 安装集群网络")]),s._v(" "),e("p",[s._v("从官方地址获取到flannel的yaml，在master1上执行")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建文件夹")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" flannel\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" flannel\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载yaml文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -c https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n")])])]),e("p",[s._v("安装flannel网络")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl apply -f kube-flannel.yml \n")])])]),e("p",[s._v("检查")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get pods -n kube-system\n")])])]),e("h2",{attrs:{id:"master2节点加入集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master2节点加入集群"}},[s._v("#")]),s._v(" master2节点加入集群")]),s._v(" "),e("h3",{attrs:{id:"复制密钥及相关文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制密钥及相关文件"}},[s._v("#")]),s._v(" 复制密钥及相关文件")]),s._v(" "),e("p",[s._v("从master1复制密钥及相关文件到master2")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh root@192.168.44.156 mkdir -p /etc/kubernetes/pki/etcd")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/admin.conf root@192.168.44.156:/etc/kubernetes")]),s._v("\n   \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/pki/{ca.*,sa.*,front-proxy-ca.*} root@192.168.44.156:/etc/kubernetes/pki")]),s._v("\n   \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scp /etc/kubernetes/pki/etcd/ca.* root@192.168.44.156:/etc/kubernetes/pki/etcd")]),s._v("\n")])])]),e("h3",{attrs:{id:"master2加入集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master2加入集群"}},[s._v("#")]),s._v(" master2加入集群")]),s._v(" "),e("p",[s._v("执行在master1上init后输出的join命令,需要带上参数"),e("code",[s._v("--control-plane")]),s._v("表示把master控制节点加入集群")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubeadm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" master.k8s.io:16443 --token ckf7bs.30576l0okocepg8b     --discovery-token-ca-cert-hash sha256:19afac8b11182f61073e254fb57b9f19ab4d798b70501036fc69ebef46094aba --control-plane\n")])])]),e("p",[s._v("检查状态")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get node\n\nkubectl get pods --all-namespaces\n")])])]),e("h2",{attrs:{id:"加入kubernetes-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加入kubernetes-node"}},[s._v("#")]),s._v(" 加入Kubernetes Node")]),s._v(" "),e("p",[s._v("在node1上执行")]),s._v(" "),e("p",[s._v("向集群添加新节点，执行在kubeadm init输出的kubeadm join命令：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubeadm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" master.k8s.io:16443 --token ckf7bs.30576l0okocepg8b     --discovery-token-ca-cert-hash sha256:19afac8b11182f61073e254fb57b9f19ab4d798b70501036fc69ebef46094aba\n")])])]),e("p",[e("strong",[s._v("集群网络重新安装，因为添加了新的node节点")])]),s._v(" "),e("p",[s._v("检查状态")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get node\nkubectl get pods --all-namespaces\n")])])]),e("h2",{attrs:{id:"测试kubernetes集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试kubernetes集群"}},[s._v("#")]),s._v(" 测试kubernetes集群")]),s._v(" "),e("p",[s._v("在Kubernetes集群中创建一个pod，验证是否正常运行：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建nginx deployment")]),s._v("\nkubectl create deployment nginx --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露端口")]),s._v("\nkubectl expose deployment nginx --port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" --type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NodePort\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nkubectl get pod,svc\n")])])]),e("p",[s._v("然后我们通过任何一个节点，都能够访问我们的nginx页面")])])}),[],!1,null,null,null);a.default=n.exports}}]);