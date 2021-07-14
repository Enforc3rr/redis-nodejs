# Redis - Node.JS
Redis, which stands for Remote Dictionary Server, is a fast, open-source, in-memory key-value data store for use as
a database, cache, message broker, and queue

### Getting Started 

- type `redis-server` in terminal to start redis server
- type `redis-cli` in another terminal to start redis cli

### Basic Redis CLI Commands
1) SET KEY VALUE : To Set value corresponding to that key
2) GET KEY : To Get value corresponding to that key (return type is String)
3) DEL KEY : To Delete Keys
4) EXISTS KEY :  To Check If key Exists Or Not
5) KEYS patterns : To Get Keys that matches this specific pattern
6) FLUSHALL : To delete all the data from database
7) TTL KEY : returns how long a key is gonna be present on database. (ttl = time to live)
    - if return type is -1 then it's gonna live forever
    - if return type is -2 then that means Value and Key has been deleted
8) EXPIRE Key time(in seconds) : To Make A key Expire
9) SETEX KEY ExpirationTime(in seconds) VALUE : To Set Expiration Time while setting up the key.
10) Array 
    - LPUSH KEY ITEM1 : To Add An item to left of an array named "KEY".
    - RPUSH KEY ITEM1 : To Add An item to left of an array named "KEY".
    - R/LRANGE KEY StartingIndex EndingIndex : To Iterate And Get Values Of Array   
        - set EndingIndex To -1 To Iterate Till End Of Array
    


