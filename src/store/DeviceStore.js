import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Frizen'},
            {id: 2, name: 'Phone'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 14 pro', price: 3300, rating: 5, img: 'C:\Users\Sparki\Desktop\Frontend\React\Practice.React\my-lending\src\source\image\page1.jpg'},
            {id: 2, name: 'Iphone 15 pro', price: 3300, rating: 5, img: 'C:\Users\Sparki\Desktop\Frontend\React\Practice.React\my-lending\src\source\image\page1.jpg'},
            {id: 3, name: 'Iphone 16 pro', price: 3300, rating: 5, img: 'C:\Users\Sparki\Desktop\Frontend\React\Practice.React\my-lending\src\source\image\page1.jpg'},
            {id: 4, name: 'Iphone 17 pro', price: 3300, rating: 5, img: 'C:\Users\Sparki\Desktop\Frontend\React\Practice.React\my-lending\src\source\image\page1.jpg'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}