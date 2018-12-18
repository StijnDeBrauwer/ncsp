import {LinkModel} from '../models/link.model';

export const routes = [
    new LinkModel('Our products', '/products', [
            new LinkModel('Parts', '/products'),
            new LinkModel('Upgrades, add-ons and conversions', '/products'),
            new LinkModel('Services', '/products')
        ]),
    new LinkModel('Contact', '/contact')
]