export const API_ROOT = (import.meta.env.VITE_API_ROOT as string)

export function rest<T>(url: string): Promise<T> {
    console.log("fetching url" + url)
    return fetch(url).then((x) => x.json())
}
  
export function api<T>(action: string): Promise<T> {
    console.log("calling rest() on " + action)
    return rest<T>(`${API_ROOT}${action}`).then((item) => {
        console.log("rest() called on " + API_ROOT + action)
        console.log(item)
        return item
    })
}

