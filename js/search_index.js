var search_data = {"index":{"searchIndex":["mixpanel","bufferedconsumer","connectionerror","consumer","events","mixpanelerror","people","servererror","tracker","alias()","append()","clear_charges()","config_http()","delete_user()","flush()","import()","import()","increment()","new()","new()","new()","new()","new()","plus_one()","request()","send()","send()","send!()","send!()","set()","set_once()","track()","track()","track_charge()","union()","unset()","update()","readme"],"longSearchIndex":["mixpanel","mixpanel::bufferedconsumer","mixpanel::connectionerror","mixpanel::consumer","mixpanel::events","mixpanel::mixpanelerror","mixpanel::people","mixpanel::servererror","mixpanel::tracker","mixpanel::tracker#alias()","mixpanel::people#append()","mixpanel::people#clear_charges()","mixpanel::config_http()","mixpanel::people#delete_user()","mixpanel::bufferedconsumer#flush()","mixpanel::events#import()","mixpanel::tracker#import()","mixpanel::people#increment()","mixpanel::bufferedconsumer::new()","mixpanel::consumer::new()","mixpanel::events::new()","mixpanel::people::new()","mixpanel::tracker::new()","mixpanel::people#plus_one()","mixpanel::consumer#request()","mixpanel::bufferedconsumer#send()","mixpanel::consumer#send()","mixpanel::bufferedconsumer#send!()","mixpanel::consumer#send!()","mixpanel::people#set()","mixpanel::people#set_once()","mixpanel::events#track()","mixpanel::tracker#track()","mixpanel::people#track_charge()","mixpanel::people#union()","mixpanel::people#unset()","mixpanel::people#update()",""],"info":[["Mixpanel","","Mixpanel.html","",""],["Mixpanel::BufferedConsumer","","Mixpanel/BufferedConsumer.html","","<p>BufferedConsumer buffers messages in memory, and sends messages as a batch.\nThis can improve performance, …\n"],["Mixpanel::ConnectionError","","Mixpanel/ConnectionError.html","",""],["Mixpanel::Consumer","","Mixpanel/Consumer.html","","<p>A Consumer recieves messages from a Mixpanel::Tracker, and sends them\nelsewhere- probably to Mixpanel&#39;s …\n"],["Mixpanel::Events","","Mixpanel/Events.html","","<p>Handles formatting Mixpanel event tracking messages and sending them to the\nconsumer. Mixpanel::Tracker …\n"],["Mixpanel::MixpanelError","","Mixpanel/MixpanelError.html","",""],["Mixpanel::People","","Mixpanel/People.html","","<p>Handles formatting Mixpanel profile updates and sending them to the\nconsumer. You will rarely need to …\n"],["Mixpanel::ServerError","","Mixpanel/ServerError.html","",""],["Mixpanel::Tracker","","Mixpanel/Tracker.html","","<p>Use Mixpanel::Tracker to track events and profile updates in your\napplication. To track an event, call …\n"],["alias","Mixpanel::Tracker","Mixpanel/Tracker.html#method-i-alias","(alias_id, real_id, events_endpoint=nil)","<p>Creates a distinct_id alias. Events and updates with an alias will be\nconsidered by mixpanel to have …\n"],["append","Mixpanel::People","Mixpanel/People.html#method-i-append","(distinct_id, properties, ip=nil, optional_params={})","<p>Appends a values to the end of list-valued properties. If the given\nproperties don&#39;t exist, a new …\n"],["clear_charges","Mixpanel::People","Mixpanel/People.html#method-i-clear_charges","(distinct_id, ip=nil, optional_params={})","<p>Clear all charges from a Mixpanel people profile\n"],["config_http","Mixpanel","Mixpanel.html#method-c-config_http","(&block)","<p>This method exists for backwards compatibility. The preferred way to\ncustomize or configure the HTTP …\n"],["delete_user","Mixpanel::People","Mixpanel/People.html#method-i-delete_user","(distinct_id, optional_params={})","<p>Permanently delete a profile from Mixpanel people analytics To delete a\nuser and ignore alias pass into …\n"],["flush","Mixpanel::BufferedConsumer","Mixpanel/BufferedConsumer.html#method-i-flush","()","<p>Pushes all remaining messages in the buffer to Mixpanel. You should call\n#flush before your application …\n"],["import","Mixpanel::Events","Mixpanel/Events.html#method-i-import","(api_key, distinct_id, event, properties={}, ip=nil)","<p>Imports an event that has occurred in the past, along with a distinct_id\nrepresenting the source of that …\n"],["import","Mixpanel::Tracker","Mixpanel/Tracker.html#method-i-import","(api_key, distinct_id, event, properties={}, ip=nil)","<p>A call to #import is to import an event occurred in the past. #import takes\na distinct_id representing …\n"],["increment","Mixpanel::People","Mixpanel/People.html#method-i-increment","(distinct_id, properties, ip=nil, optional_params={})","<p>Changes the value of properties by a numeric amount.  Takes a hash with\nstring keys and numeric properties. …\n"],["new","Mixpanel::BufferedConsumer","Mixpanel/BufferedConsumer.html#method-c-new","(events_endpoint=nil, update_endpoint=nil, import_endpoint=nil, max_buffer_length=MAX_LENGTH, &block)","<p>Create a Mixpanel::BufferedConsumer. If you provide endpoint arguments,\nthey will be used instead of …\n"],["new","Mixpanel::Consumer","Mixpanel/Consumer.html#method-c-new","(events_endpoint=nil, update_endpoint=nil, import_endpoint=nil)","<p>Create a Mixpanel::Consumer. If you provide endpoint arguments, they will\nbe used instead of the default …\n"],["new","Mixpanel::Events","Mixpanel/Events.html#method-c-new","(token, &block)","<p>You likely won&#39;t need to instantiate an instance of Mixpanel::Events\ndirectly. The best way to get …\n"],["new","Mixpanel::People","Mixpanel/People.html#method-c-new","(token, &block)","<p>You likely won&#39;t need to instantiate instances of Mixpanel::People\ndirectly. The best way to get …\n"],["new","Mixpanel::Tracker","Mixpanel/Tracker.html#method-c-new","(token, &block)","<p>Takes your Mixpanel project token, as a string.\n\n<pre>tracker = Mixpanel::Tracker.new(YOUR_MIXPANEL_TOKEN)</pre>\n<p>By …\n"],["plus_one","Mixpanel::People","Mixpanel/People.html#method-i-plus_one","(distinct_id, property_name, ip=nil, optional_params={})","<p>Convenience method- increases the value of a numeric property by one.\nCalling #plus_one(distinct_id, …\n"],["request","Mixpanel::Consumer","Mixpanel/Consumer.html#method-i-request","(endpoint, form_data)","<p>Request takes an endpoint HTTP or HTTPS url, and a Hash of data to post to\nthat url. It should return …\n"],["send","Mixpanel::BufferedConsumer","Mixpanel/BufferedConsumer.html#method-i-send","(type, message)","<p>This method was deprecated in release 2.0.0, please use send! instead\n"],["send","Mixpanel::Consumer","Mixpanel/Consumer.html#method-i-send","(type, message)","<p>This method was deprecated in release 2.0.0, please use send! instead\n"],["send!","Mixpanel::BufferedConsumer","Mixpanel/BufferedConsumer.html#method-i-send-21","(type, message)","<p>Stores a message for Mixpanel in memory. When the buffer hits a maximum\nlength, the consumer will flush …\n"],["send!","Mixpanel::Consumer","Mixpanel/Consumer.html#method-i-send-21","(type, message)","<p>Send the given string message to Mixpanel. Type should be one of :event,\n:profile_update or :import, …\n"],["set","Mixpanel::People","Mixpanel/People.html#method-i-set","(distinct_id, properties, ip=nil, optional_params={})","<p>Sets properties on a user record. Takes a Hash with string keys, and values\nthat are strings, numbers, …\n"],["set_once","Mixpanel::People","Mixpanel/People.html#method-i-set_once","(distinct_id, properties, ip=nil, optional_params={})","<p>set_once works just like #set, but will only change the value of properties\nif they are not already present …\n"],["track","Mixpanel::Events","Mixpanel/Events.html#method-i-track","(distinct_id, event, properties={}, ip=nil)","<p>Notes that an event has occurred, along with a distinct_id representing the\nsource of that event (for …\n"],["track","Mixpanel::Tracker","Mixpanel/Tracker.html#method-i-track","(distinct_id, event, properties={}, ip=nil)","<p>A call to #track is a report that an event has occurred.  #track takes a\ndistinct_id representing the …\n"],["track_charge","Mixpanel::People","Mixpanel/People.html#method-i-track_charge","(distinct_id, amount, properties={}, ip=nil, optional_params={})","<p>Records a payment to you to a profile. Charges recorded with #track_charge\nwill appear in the Mixpanel …\n"],["union","Mixpanel::People","Mixpanel/People.html#method-i-union","(distinct_id, properties, ip=nil, optional_params={})","<p>Set union on list valued properties. Associates a list containing all\nelements of a given list, and all …\n"],["unset","Mixpanel::People","Mixpanel/People.html#method-i-unset","(distinct_id, properties, ip=nil, optional_params={})","<p>Removes properties and their values from a profile.\n\n<pre>tracker = Mixpanel::Tracker.new\n\n# removes a single ...</pre>\n"],["update","Mixpanel::People","Mixpanel/People.html#method-i-update","(message)","<p>Send a generic update to Mixpanel people analytics. Caller is responsible\nfor formatting the update message, …\n"],["Readme","","Readme_rdoc.html","","<p><img src=\"https://travis-ci.org/mixpanel/mixpanel-ruby.svg?branch=master\"\nalt=\"Build Status\" />\n<p>mixpanel-ruby: …\n"]]}}