export const API_ROOT = (import.meta.env.VITE_API_ROOT as string)

export function rest<T>(url: string): Promise<T> {
    return fetch(url).then((x) => {
        console.log(url)
        console.log(x)
        return x.json()
    })
}
  
export function api<T>(action: string): Promise<T> {
    return rest<T>(`${API_ROOT}${action}`)
}

