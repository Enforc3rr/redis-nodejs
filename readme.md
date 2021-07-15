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
    - LRANGE KEY StartingIndex EndingIndex : To Iterate And Get Values Of Array   
        - set EndingIndex To -1 To Iterate Till End Of Array
    - LPOP KEY : Pops out item from left and returns us the value
    - RPOP KEY : Pops out item from right and returns us the value
    
11) Sets 
    - SADD KEY "Item1" : To Add Item To Set 
        - If It returns 1 that means Item has been added.
        - If it returns 0 that means Item is already present and has not been added.
    - SREM KEY "Item" : To Remove A particular Item From List
        - If It returns 1 that means Item has been removed.
        - If it returns 0 that means Item is already present and has not been removed.
    - SMEMBERS KEY : To See The Members of a particular Set
    
12) Hashes : Something Similar To Objects In JS (Key-value pair)
    - HSET ObjName Prop Value : To Set Property And Value Of an Object.  
    - HGET ObjName Prop : To Get Value Of A Particular Property Of An Object.
    - HGETALL ObjName :  To Get All Properties And Values Of an Object.
    - HDEL ObjName Prop : To Delete Property Of A Particular Object.
    - HEXISTS ObjName name : To Check If A particular Property Exists In AN Object or Not.

