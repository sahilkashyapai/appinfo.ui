import { useState, useMemo } from 'react';
import CompHeader from './CompHeader';
import { useClipboard } from '../utils/useClipboard';

const ICON_CATEGORIES = [
    {
        label: 'Navigation & Arrows',
        icons: [
            'arrow_forward', 'arrow_back', 'arrow_upward', 'arrow_downward',
            'arrow_forward_ios', 'arrow_back_ios', 'expand_more', 'expand_less',
            'chevron_right', 'chevron_left', 'unfold_more', 'unfold_less',
            'swap_horiz', 'swap_vert', 'open_in_new', 'launch',
        ],
    },
    {
        label: 'Add, Remove & Actions',
        icons: [
            'add', 'remove', 'add_circle', 'remove_circle',
            'add_circle_outline', 'remove_circle_outline', 'close', 'check',
            'check_circle', 'cancel', 'delete', 'edit',
            'save', 'refresh', 'replay', 'undo',
        ],
    },
    {
        label: 'Form & Input',
        icons: [
            'text_fields', 'visibility', 'visibility_off', 'search',
            'filter_list', 'sort', 'tune', 'manage_search',
            'input', 'output', 'content_paste', 'content_copy',
            'content_cut', 'select_all', 'format_list_bulleted', 'format_list_numbered',
        ],
    },
    {
        label: 'Communication',
        icons: [
            'chat', 'chat_bubble', 'chat_bubble_outline', 'forum',
            'message', 'sms', 'mail', 'email',
            'phone', 'call', 'phone_in_talk', 'voicemail',
            'notifications', 'notifications_active', 'notifications_off', 'announcement',
        ],
    },
    {
        label: 'Maps & Location',
        icons: [
            'distance', 'layers', 'map', 'place',
            'location_on', 'location_off', 'my_location', 'near_me',
            'directions', 'directions_walk', 'directions_car', 'directions_bus',
            'route', 'navigation', 'explore', 'radar',
        ],
    },
    {
        label: 'Traffic & Transport',
        icons: [
            'traffic', 'emergency', 'local_hospital', 'ambulance',
            'fire_truck', 'local_police', 'directions_car', 'two_wheeler',
            'local_shipping', 'airport_shuttle', 'commute', 'transfer_within_a_station',
            'road', 'roundabout_right', 'u_turn_right', 'speed',
        ],
    },
    {
        label: 'Weather',
        icons: [
            'rainy', 'cloudy', 'sunny', 'partly_cloudy_day',
            'thunderstorm', 'foggy', 'snowing', 'ac_unit',
            'thermostat', 'humidity_percentage', 'air', 'grain',
            'wb_sunny', 'wb_cloudy', 'storm', 'cyclone',
        ],
    },
    {
        label: 'Design & Tools',
        icons: [
            'colorize', 'palette', 'format_paint', 'brush',
            'design_services', 'draw', 'edit_note', 'auto_fix_high',
            'crop', 'rotate_right', 'flip', 'straighten',
            'gradient', 'lens', 'circle', 'square',
        ],
    },
    {
        label: 'Settings & System',
        icons: [
            'settings', 'build', 'tune', 'manage_accounts',
            'admin_panel_settings', 'lock', 'lock_open', 'security',
            'shield', 'verified', 'info', 'help',
            'help_outline', 'error', 'warning', 'bug_report',
        ],
    },
    {
        label: 'Media & Files',
        icons: [
            'image', 'photo_camera', 'videocam', 'mic',
            'play_arrow', 'pause', 'stop', 'skip_next',
            'volume_up', 'volume_off', 'folder', 'file_present',
            'attach_file', 'download', 'upload', 'cloud_upload',
        ],
    },
    {
        label: 'Dashboard & Data',
        icons: [
            'dashboard', 'bar_chart', 'show_chart', 'pie_chart',
            'analytics', 'trending_up', 'trending_down', 'leaderboard',
            'table_chart', 'grid_view', 'list', 'view_module',
            'insights', 'assessment', 'stacked_bar_chart', 'area_chart',
        ],
    },
    {
        label: 'People & Identity',
        icons: [
            'person', 'people', 'group', 'groups',
            'account_circle', 'face', 'supervisor_account', 'how_to_reg',
            'badge', 'fingerprint', 'person_add', 'person_remove',
            'contact_page', 'contacts', 'recent_actors', 'social_distance',
        ],
    },
];

function IconTile({ name, filled }) {
    const { copy, copied } = useClipboard(1500);
    const snippet = `<span class="material-symbols-outlined">${name}</span>`;

    return (
        <button
            className={`icon-tile ${copied ? 'icon-tile--copied' : ''}`}
            title={`Click to copy HTML snippet`}
            onClick={() => copy(snippet)}
            type="button"
        >
            <span
                className="material-symbols-outlined icon-tile__glyph"
                style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
                aria-hidden="true"
            >
                {name}
            </span>
            <span className="icon-tile__name">{name}</span>
            {copied && <span className="icon-tile__badge">Copied!</span>}
        </button>
    );
}

export default function Icons() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [filled, setFilled] = useState(false);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return ICON_CATEGORIES.map((cat) => ({
            ...cat,
            icons: cat.icons.filter((icon) =>
                (!q || icon.includes(q)) &&
                (activeCategory === 'all' || cat.label === activeCategory)
            ),
        })).filter((cat) => cat.icons.length > 0);
    }, [search, activeCategory]);

    const totalVisible = filtered.reduce((sum, c) => sum + c.icons.length, 0);

    return (
        <div className="comp-panel" id="p-icons">
            <CompHeader
                title="Icons"
                lead="Material Symbols used across the Glance ecosystem. Click any icon to copy its HTML snippet."
            />

            {/* Toolbar */}
            <div className="icons-toolbar">
                <div className="icons-toolbar-top">
                    <div className="icons-search-wrap">
                        <span className="material-symbols-outlined" aria-hidden="true">search</span>
                        <input
                            className="icons-search-input"
                            type="text"
                            placeholder="Search icons…"
                            value={search}
                            onInput={(e) => setSearch(e.target.value)}
                        />
                        {search && (
                            <button
                                className="icons-search-clear"
                                onClick={() => setSearch('')}
                                type="button"
                                aria-label="Clear search"
                            >
                                <span className="material-symbols-outlined" aria-hidden="true">close</span>
                            </button>
                        )}
                    </div>

                    {/* Fill / Outline toggle */}
                    <div className="icons-fill-toggle" title="Toggle filled / outlined style">
                        <button
                            className={`icons-fill-btn ${!filled ? 'active' : ''}`}
                            onClick={() => setFilled(false)}
                            type="button"
                        >
                            <span className="material-symbols-outlined" aria-hidden="true">crop_square</span>
                            Outlined
                        </button>
                        <button
                            className={`icons-fill-btn ${filled ? 'active' : ''}`}
                            onClick={() => setFilled(true)}
                            type="button"
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                                aria-hidden="true"
                            >
                                square
                            </span>
                            Filled
                        </button>
                    </div>
                </div>

                <div className="icons-category-pills">
                    <button
                        className={`icon-cat-pill ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                        type="button"
                    >
                        All
                    </button>
                    {ICON_CATEGORIES.map((cat) => (
                        <button
                            key={cat.label}
                            className={`icon-cat-pill ${activeCategory === cat.label ? 'active' : ''}`}
                            onClick={() => setActiveCategory(activeCategory === cat.label ? 'all' : cat.label)}
                            type="button"
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <p className="icons-count">
                Showing <strong>{totalVisible}</strong> icon{totalVisible !== 1 ? 's' : ''}
            </p>

            {filtered.length === 0 ? (
                <div className="icons-empty">
                    <span className="material-symbols-outlined" aria-hidden="true">search_off</span>
                    <p>No icons match <em>"{search}"</em></p>
                </div>
            ) : (
                filtered.map((cat) => (
                    <div className="icons-group" key={cat.label}>
                        <div className="sub-heading">{cat.label}</div>
                        <div className="icons-grid">
                            {cat.icons.map((name) => (
                                <IconTile key={name} name={name} filled={filled} />
                            ))}
                        </div>
                    </div>
                ))
            )}

            {/* Usage */}
            <div className="sub-heading" style={{ marginTop: '2rem' }}>Usage</div>
            <div className="icons-usage-block">
                <div className="icons-usage-note">
                    <span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
                    <p>No CDN needed — the Material Symbols font is already bundled in the CSS. Just copy the snippet and paste it into your code.</p>
                </div>

                <p>Outlined (default):</p>
                <pre className="icons-code-pre"><code>{`<span class="material-symbols-outlined">settings</span>`}</code></pre>

                <p>Filled variant:</p>
                <pre className="icons-code-pre"><code>{`<span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">settings</span>`}</code></pre>

                <p>Or via a CSS class:</p>
                <pre className="icons-code-pre"><code>{`.icon-filled { font-variation-settings: 'FILL' 1; }\n\n<span class="material-symbols-outlined icon-filled">settings</span>`}</code></pre>
            </div>
        </div>
    );
}
