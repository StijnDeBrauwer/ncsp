import { LinkModel } from '../models/link.model';

export const routes = [
    new LinkModel('Our Company', undefined,
        [
            new LinkModel('Our vision', '/company/vision', undefined, 'visibility'),
            new LinkModel('Who we are', '/company/who-we-are', undefined, 'supervisor_account'),
            new LinkModel('Our approach', '/company/approach', undefined, 'timeline')
        ],
        'business'),
    new LinkModel('Our products', '/products', undefined, 'build'),
    new LinkModel('Our solutions', '/solutions', undefined, 'settings_input_component'),
    new LinkModel('Contact', '/contact', undefined, 'alternate_email')
]