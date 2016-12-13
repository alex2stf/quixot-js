
    function getCacheNamed(name) {
        var data = getNodeJsCache();
        if(data[name]){
            return data[name];
        }
        return {};
    }


    function getCachePath() {
        var fs = __require('fs');
        var p = __require('path');
        var path = envData.homeDir + p.sep + ".cache";
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
        path += p.sep + "quixot.cache.json";

        return path;
    }

    function saveNodeJsCache(newdata) {
        var path = getCachePath(), fs = __require('fs');
        var line = fs.readFileSync(path, "utf8");
        var oldData = JSON.parse(line);
        if(newdata){
            var props = 0;
            for(var i in newdata){
                oldData[i] = newdata[i];
                props++;
            }

            if(props > 0){

                console.log('saving' + JSON.stringify(oldData));
                fs.writeFileSync(path, JSON.stringify(oldData));
            }
        }
    }

    function removeNodeJsCache(keyname, slot) {
        var path = getCachePath(), fs = __require('fs');
        var line = fs.readFileSync(path, "utf8");
        var oldData = JSON.parse(line);
        var obj = oldData[keyname];
        delete obj[slot];
        fs.writeFileSync(path, JSON.stringify(oldData));
    }

    function getNodeJsCache() {
        var path = getCachePath(), fs = __require('fs');
        if (!fs.existsSync(path)) {
            var initData = {
                creationDate: new Date(),
                writer: 'quixot'
            };
            fs.writeFileSync(path, JSON.stringify(initData));
            return initData;
        }
        var line = fs.readFileSync(path, "utf8");
        var oldData = JSON.parse(line);
        return oldData;
    }


    function CacheInstance(paramname) {
        var name = 'qch' + (paramname+'');
        name = name.replace(/\?/g, 'î')
            .replace(/=/g, 'ă')
            .replace(/\//g, 'ț')
            .replace(/\./g, '₤')
        ;



        var data = (function () {
            var r;
            if(isBrowser) {
                if(typeof localStorage != 'undefined') {
                    r = localStorage.getItem(name);
                }
                if(!r) {
                    r = getCookie(name);
                }

                try {
                    r = JSON.parse(r);
                }catch (e) {
                    throw new Error('failed loading cache from ' + r);
                    r = {};
                }
            } else {
                r = getCacheNamed(name);
            }
            return r;
        })();

        var propKeys = 1;


        this.put = function (slot, object) {
            if(slot && object) {
                if(!data) {
                    data = {};
                }
                data[slot] = object;
            }
            this.save();
        }


        var saveTimeoutId = 0;

        this.remove = function (slot) {
            if(data) {
               delete data[slot];
               if(!isBrowser){
                   removeNodeJsCache(name, slot);
               } else{
                   this.save();
               }
            }
        }



        this.save = function () {
            if(!data) {
                return;
            }
            if(isBrowser) {
                clearTimeout(saveTimeoutId);

                if(typeof localStorage != 'undefined') {
                    localStorage.setItem(name, JSON.stringify(data));
                }
                setCookie(name, JSON.stringify(data));

                saveTimeoutId = setTimeout(function () {
                    getCacheInstance(paramname).save();
                }, 1000 * 10);

            } else {
                var vdata = {};
                vdata[name] = data;
                saveNodeJsCache(vdata);
            }
        }



        this.getData =function () {
            return data;
        }


        this.getSafe = function (propname, defaultvalue) {
            if(data && data[propname]){
                return data[propname];
            }
            if(defaultvalue){
                if(!data){
                    data = {};
                }
                data[propname] = defaultvalue;
                return defaultvalue;
            }

            return null;
        }
    }


    var domain = url_currentDomain(),
        path = url_current_path(),
        search = url_current_search();


    var domainCacheInstance = new CacheInstance(domain),
        pathCacheInstance =  new CacheInstance(path),
        searchCacheInstance = new CacheInstance(search);


    var cacheContainer = {
        domain: domainCacheInstance,
        path: pathCacheInstance,
        search : searchCacheInstance
    };


function getCacheInstance(instancename) {
                if(!cacheContainer[instancename]) {
                    cacheContainer[instancename] = new CacheInstance(instancename);
                }
                return cacheContainer[instancename];
}


