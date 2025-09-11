---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
draft: false
author: k0bayashi
fingerprint: {{ crypto.SHA256 time.Now.Unix }}
---
