/**
 * The ProxySubject interface declares common operations for both RealSubject and the
 * ProxyService. As long as the client works with RealSubject using this interface,
 * you'll be able to pass it a proxy instead of a real subject.
 */
interface ProxySubject {
  request(): void;
}

/**
 * The RealSubject contains some core business logic. Usually, RealSubjects are
 * capable of doing some useful work which may also be very slow or sensitive -
 * e.g. correcting input data. A Proxy can solve these issues without any
 * changes to the RealSubject's code.
 */
class RealSubject implements ProxySubject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}

/**
 * The ProxyService has an interface identical to the RealSubject.
 */
class ProxyService implements ProxySubject {
  private realSubject: RealSubject;

  /**
   * The ProxyService maintains a reference to an object of the RealSubject class. It
   * can be either lazy-loaded or passed to the ProxyService by the client.
   */
  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  /**
   * The most common applications of the ProxyService pattern are lazy loading,
   * caching, controlling the access, logging, etc. A ProxyService can perform one of
   * these things and then, depending on the result, pass the execution to the
   * same method in a linked RealSubject object.
   */
  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    // Some real checks should go here.
    console.log('ProxyService: Checking access prior to firing a real request.');

    return true;
  }

  private logAccess(): void {
    console.log('ProxyService: Logging the time of request.');
  }
}

/**
 * The client code is supposed to work with all objects (both subjects and
 * proxies) via the ProxySubject interface in order to support both real subjects and
 * proxies. In real life, however, clients mostly work with their real subjects
 * directly. In this case, to implement the pattern more easily, you can extend
 * your proxy from the real subject's class.
 */
function proxyClientCode(subject: ProxySubject) {
  // ...

  subject.request();

  // ...
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
proxyClientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxyService = new ProxyService(realSubject);
proxyClientCode(proxyService);
