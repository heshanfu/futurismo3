---
author: admin
categories:
- Linux
- Ruby
date: 2013-06-08T15:22:10+00:00
dsq_thread_id:
- 3.728179e+09
pvc_views:
- 5604
tags:
- CentOS
title: CentOSに rbenv 経路で Ruby 2.0.0-p195を入れようとしたら、エラー
type: post
url: /archives/=1389
---

CentOSに rbenv 経路で Ruby 2.0.0-p195を入れようとしたら、エラーした。

導入した手順は過去記事参照。

<a href="https://futurismo.biz/archives/1383" target="_blank">Cygwin上のRuby1.9をrbenvで最新版Ruby2.0にバージョンアップしたの巻 | Futurismo</a>

> installing default gems:&#160;&#160;&#160;&#160;&#160; /home/tsu-nera/.rbenv/versions/2.0.0-p195/lib/ruby/gems/2.0.0 (build_info, cache, doc, gems, specifications)   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; bigdecimal 1.2.0   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; io-console 0.4.2   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; json 1.7.7   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; minitest 4.3.2   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; psych 2.0.0   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; rake 0.9.6   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; rdoc 4.0.0   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; test-unit 2.0.0.0   
> The Ruby openssl extension was not compiled. Missing the OpenSSL lib?
> 
> BUILD FAILED
> 
> Inspect or clean up the working tree at /tmp/ruby-build.20130517183130.16922   
> Results logged to /tmp/ruby-build.20130517183130.16922.log
> 
> Last 10 log lines:   
> installing default gems:&#160;&#160;&#160;&#160;&#160; /home/tsu-nera/.rbenv/versions/2.0.0-p195/lib/ruby/gems/2.0.0 (build_info, cache, doc, gems, specifications)   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; bigdecimal 1.2.0   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; io-console 0.4.2   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; json 1.7.7   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; minitest 4.3.2   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; psych 2.0.0   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; rake 0.9.6   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; rdoc 4.0.0   
> &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; test-unit 2.0.0.0   
> The Ruby openssl extension was not compiled. Missing the OpenSSL lib? 

openssl がないぞと言われるが、インストールはされている。

OpenSSL 1.0.0-fips 29 Mar 2010

調べてみると、libssl-devなるものが必要なようだ。

<a href="https://www.ruby-forum.com/topic/4411882" target="_blank">Installing Ruby 2.0.0-p0 using Rbenv on Ubuntu 12.04.2 LTS &#8211; Ruby Forum</a>

CentOSでは、openssl-develに当たるものがそれっぽいので、インストール。

> sudo yum -y install openssl-devel

これでうまく行った(・∀・)