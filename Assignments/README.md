 What Is Angular?
 	Angular is a framework that utilizes components in order to create single page applications that could be used on a small or large scale. 
	 	
 What are Services and How Do We Use Them?
 	A service is a specialized class that excels within a singular role. These normally don’t utilize the view and communicate with components behind the scenes. These are typically used with Dependency Injections, and can share data between components. 
	 	
 What Is Dependency Injection?
 	This is a decorator that allows you to give components access to services. This uses  the @Injector() method to define a class as a service and “inject” it into a component as a dependency. 
	 	
 What Are Directives?
 	In short, directives are elements that give instructions to the DOM in order to transform it a certain way. There are two types: structural and attributive. 
    Structural removes, adds, or replaces elements within the DOM, while attributive alters the appearance or behavior of an element. 
	 	
 What Are Pipes?
 	Pipes are functions that take in an input and transform it. These are used in template expressions and can be reused across an application. 
	 	
 What is @Input and @Output Decorators? What is ViewChild?
 	Input and Output decorators are used to configure metadata and either pass information to child components, or to pass it up to parent components. They are ways to facilitate communication among different parts of your app. 
    ViewChild is another decorator that configures a view query. It looks for a selector passed into it, and updates any information where that selector is.
	 	
 What Are The Angular Lifecycle Hooks, and What Are They Used For?
    The Lifecycle as a whole is the protocol that Angular goes through whenever it initially boots up an app. The Hooks to access the various parts are as follows: 

 	    ngOnChanges: Called prior to OnInit and whenever any data-bound properties change.

        ngOnInit: Takes place whenever a component initializes. Typically called once and always after OnChanges

        ngDoCheck: Invoked whenever the change detector of a component is triggered. 

        ngAfterContentInit: Normally called after the initial DoCheck, useful for projecting content. 

        ngAfterContentChecked: Called after the content has been checked out

        ngAfterViewInit: Called once the view is initialized

        ngAfterViewChecked: Called once the view has been checked

        ngOnDestroy: Typically called just before something is removed from the DOM.
 	
    AfterContentInit, AfterContentChecked, AfterViewInit, and AfterViewChecked are component only hooks. It is vital one doesn’t put expensive calls within the DoCheck hook else an infinite loop with OnChanges could occur. 
	 	
 What Is Angular Routing?
 	This is essentially how Angular “navigates” through the app. While most other sites will navigate to different pages and make GET requests to a server, routing takes that URL and makes a change to the page itself instead of moving off of it. 
 	
	 	
 How Can We Nest Routes?
 	Nesting route is a matter of setting up a fresh path and component for the child. That and the array to navigate must be in the child. 
 	
	 	
 How Can We Guard Routes From Unauthorized Access?
 	Dumb as it sounds, by using route guards. This can be done by creating component-less routes for children to allow them to speak to one another and not through the parent.  
 	
	 	
 What Is Lazy Loading, And How Can We Implement This?
 	Lazy loading is the process which the app does not load entirely, only bringing up what is absolutely needed in the moment. This can be implemented through a router, and having certain paths be ignored while rendering what we want. 
 	
	 	
 What Are The Two Types Of Forms In Angular, and How Are They Different?
 	Reactive and template-driven. Reactive provides access to the object model, are scalable, and are overall more dynamic. Templates require use of directives to control the object model and are very basic. 
 	
	 	
 What Is The HTTP Client Module?
 	
    This module is what allows us to utilize the HTTP methods within Angular. This is what ties in RXJS and Observables, allows us to talk to servers, and to make our GET, POST, PATCH, and DELETE options. 
 	
What are the 4 types of data binding in angular
	Property binding, which binds to various elements or attributes, string interpolation, which inputs variables or other methods into the template, event binding, which takes certain events that take place on a page and requires event emitters to sent the data along, and then two-way data binding, which shares data to different components while also updating the current component

 What Is RXJS?
 	This is short for Reactive Extensions for Javascript. And for some reason Angular.io points to wiki as a source and this bothers me on an intellectual level. Seriously Google, what on God’s green earth are you thinking? I swear, whoever wrote this section went to Georgia Tech. 
    Right, what this is. It is a library that exists to help with asynchronous programming. It achieves this through something called Observables, and has a series of patterns to help manage the sequence of events in order to create an async method. It also provides utility methods to help work with and create Observables. 
 	
	 	
 What Are Observables? (Refer to the 2nd link provided above)
 	It is the basic building block of RxJS. To put simply, it is the representation of future values and events held within a collection. Observables must be subscribed to in order for its data to be available to it. They can also be called multiple times through the next() method. 
 	
	In some ways they are similar to Promises, but hold several key differences. The first is they can be called multiple times; promises can only be called once. They also cannot do anything until they are subscribed to by an Observer. 
	 	
 What Are Operators?
 	Short and simple, these are functions. To expand, they are what allows the code to be asynchronous and manipulate the collections of observables. There are two main operators: Pipeable and Creation Operators. 
    The Pipeable operators are capable of being piped to observables and create a new one based on the original observable. This does not change the original one in any way. 
    A Creation operable is used to create new observables either from preexisting observables or to combine with one. 
 	
	 	
 What Are Subjects and Behavioral Subjects
	Subjects act a little bit like both an observer and an observable. It acts like an observer as it pays attention to a single Observable. What makes it different from a standard observable is that it can be multicast into multiple observers. 

	Behavior Subjects operation similarly, but the primary difference is Behavior Subjects hold an initial value to begin with, and will spit back out the last value held upon subscription.

