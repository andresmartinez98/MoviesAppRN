// Se crea una clase abstracta ya que no se van a tener instancias de esta clase

export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}