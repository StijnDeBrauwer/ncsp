import {LinkModel} from '../models/link.model';

export const routes = [
    new LinkModel('Our products', '/products', [
        new LinkModel('Upgrades, add-ons and conversions', '/products/upgrades'),
        new LinkModel('Parts', '/products/parts')
    ]),
    new LinkModel('Services', '/products/services'),
    new LinkModel('Contact', '/contact'),
];