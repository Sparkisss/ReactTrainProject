import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridge'},
            {id: 2, name: 'Phone'},
            {id: 3, name: 'Washer'},
            {id: 4, name: 'Laptop'},
            {id: 5, name: 'Tablet'},
            {id: 6, name: 'PC'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 14 pro', price: 3300, rating: 5, img: 'https://cdn.new-brz.net/app/public/models/SM-R890ZKASEK/large/w/221026160013651115.webp'},
            {id: 2, name: 'Iphone 15 pro', price: 3300, rating: 5, img: 'https://cdn.new-brz.net/app/public/models/SM-R890ZKASEK/large/w/221026160013651115.webp'},
            {id: 3, name: 'Iphone 16 pro', price: 3300, rating: 5, img: 'https://cdn.new-brz.net/app/public/models/SM-R890ZKASEK/large/w/221026160013651115.webp'},
            {id: 4, name: 'Iphone 17 pro', price: 3300, rating: 5, img: 'https://cdn.new-brz.net/app/public/models/SM-R890ZKASEK/large/w/221026160013651115.webp'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}