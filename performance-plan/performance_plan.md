# Performance Test Plan – Bamboo Card QA Assessment

-> What I’d Focus On

If I had to pick one area of the Magento demo site to test for performance, I’d choose the checkout process, starting from adding something to the cart all the way through to placing an order.

The reason is simple: this is where most users complete their journey, and any slowness or errors here directly affects the business. It also connects to multiple systems like the cart, shipping, inventory, and payment, so it’s a good way to see how well the platform handles user activity under pressure.

---

-> My Approach

I’ve worked with Apache JMeter before, so I’d use that for all my load testing. I’m comfortable setting up realistic scenarios that simulate how users interact with the site.

Here are a few situations I’d test:

---> 1. Normal User Load

I’d simulate something like 100 to 500 users going through a typical buying process:
- Browse a product
- Add it to the cart
- Continue to checkout
- Enter details and place the order

During this test, I’d measure how fast each page loads and if any part starts to slow down or break as more users are added.

---> 2. Pushing the Limits

To understand how much the system can take, I’d increase the load steadily beyond normal levels, maybe up to 1000 users, and watch for where things start to fail. This would help identify bottlenecks in the cart or checkout APIs.

---> 3. Sudden Traffic Spike

In real life, sometimes lots of users hit the site at once, like during a sale or promo. I’d test what happens when 500+ users arrive within a few seconds and try to check out at the same time.

---> 4. Long-Running Load

I’d also run a test with about 200 users over several hours to see if performance degrades slowly over time — this can help catch issues like memory leaks or database slowdowns.

---> 5. Product Search

Another area I’d quickly test is the search bar. I’d simulate lots of users typing different keywords to make sure the search stays responsive even under load.

---

--> What I’d Measure

- How fast pages and APIs respond (especially at the 95th and 99th percentiles)
- Error rates during each test
- System resource usage (like memory and CPU)
- How well the system recovers after hitting limits

---

--> Final Thoughts

Since I’ve worked with JMeter, my test setup would be designed in that tool. It allows me to create real-life user scenarios and watch how the system behaves as I apply pressure in different ways.

The goal is to make sure that even when traffic increases, the checkout experience stays smooth and reliable for every customer.

