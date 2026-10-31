/* Saved progress for the tools on samplesize1.com.
 *
 * Everything stays in the visitor's own browser (localStorage): no account,
 * nothing is sent anywhere. Each tool gets its own drawer, named after its
 * folder in public/tools/ (for example 'bone-atlas'), stored as "ss1.<id>.<key>".
 *
 * In a tool page:
 *   <script src="/js/progress.js"></script>
 *   const saved = SiteProgress.tool('bone-atlas');
 *   saved.get('best', {})     read a value, with a default if nothing is saved
 *   saved.set('best', value)  save a value
 *
 * If storage is blocked (some private modes), reads return the default and
 * saves do nothing, so tools still work.
 */
(function () {
	var ROOT = 'ss1.';

	function storage() {
		try {
			return window.localStorage;
		} catch (e) {
			return null;
		}
	}

	function read(key, fallback) {
		var s = storage();
		if (!s) return fallback;
		try {
			var v = s.getItem(key);
			return v == null ? fallback : JSON.parse(v);
		} catch (e) {
			return fallback;
		}
	}

	function write(key, value) {
		var s = storage();
		if (!s) return false;
		try {
			s.setItem(key, JSON.stringify(value));
			return true;
		} catch (e) {
			return false;
		}
	}

	function keysStartingWith(prefix) {
		var s = storage();
		var out = [];
		if (!s) return out;
		try {
			for (var i = 0; i < s.length; i++) {
				var k = s.key(i);
				if (k && k.indexOf(prefix) === 0) out.push(k);
			}
		} catch (e) {}
		return out;
	}

	/** A tool's saved data. options.legacyPrefix: move data saved under an older name. */
	function tool(id, options) {
		var base = ROOT + id + '.';
		var legacy = options && options.legacyPrefix;
		var s = storage();
		if (legacy && s) {
			keysStartingWith(legacy).forEach(function (oldKey) {
				var newKey = base + oldKey.slice(legacy.length);
				try {
					if (s.getItem(newKey) == null) s.setItem(newKey, s.getItem(oldKey));
					s.removeItem(oldKey); // only reached if the copy worked
				} catch (e) {}
			});
		}
		return {
			get: function (key, fallback) {
				return read(base + key, fallback);
			},
			set: function (key, value) {
				write(base + key, value);
			},
		};
	}

	window.SiteProgress = { tool: tool };
})();
