const TYPE = {
  category: "category",
  doc: "doc",
  link: "link",
  tab: "tab",
};

export const data = [
  {
    type: TYPE.category,
    label: "Overview",
    path: '/docs',
    items: [
      {
        type: TYPE.link,
        label: "FAQs",
        path: "/docs/faqs",
      },
    ]
  },

  {
    type: TYPE.category,
    label: "Get Started",
    slug: "get-started",
    items: [
      // {label: "CLI Install", slug: "cli-install"},
      // {label: 'Windows Install', slug: 'windows-install'},
      // {label: 'MacOS Install', slug: 'macos-install'},
      // {label: 'Linux Install', slug: 'linux-install'},
      // {label: 'DotContract Cloud', slug: 'dotcontract-cloud'},
    ]
  },

  {
    type: TYPE.category,
    label: "CLI",
    slug: "cli",
    items: [
      {label: 'create'},
      {label: 'commit'},
      {label: 'query'},
      {label: 'info'},
      {label: 'log'},
      {label: 'push'},
      {label: 'pull'},
      {label: 'pack'},
      {label: 'unpack'},
      {label: 'extract'},
      {label: 'gen-keypair'},
    ]
  },
  {
    type: TYPE.category,
    label: "By Example",
    slug: "by-example",
    items: [
      {
        type: TYPE.link,
        label: "Create a DotContract",
        slug: "create-a-dotcontract",
      },
      {
        type: TYPE.link,
        label: "Read Commit History",
        slug: "read-commit-history",
      },
    ]
  },
  {
    type: TYPE.category,
    label: "Modality",
    slug: "modality",
    items: [
      {label: 'Rules and Models', slug: 'rules-and-models'},
      {label: 'Necessity and Possibility', slug: 'necessity-and-possibility'},
      {label: 'Can and Must', slug: 'can-and-must'},
      {label: 'Fixed Point Operators', slug: 'fixed-point-operators'},
      {label: 'Henceforth and Until', slug: 'henceforth-and-until'},
    ]
  },
  {
    type: TYPE.category,
    label: "Concepts",
    slug: "concepts",
    items: [
      {
        type: TYPE.doc,
        label: 'Temporal Modal Logic',
        slug: 'temporal-modal-logic',
      },
      {
        type: TYPE.doc,
        label: 'Kripke Machine',
        slug: 'kripke-machine',
      }
    ]
  },
];

export const other = {
  community: {
    label: "Community",
    items: [
      {
        label: "GitHub",
        url: "https://github.com/dotcontract",
        description: "Visit DotContract on GitHub.",
      },
      {
        label: "Discord",
        url: "https://discord.gg/dotcontract",
        description:
          "Join our Discord server to chat about development and get help from the community.",
      },
    ],
  },
};

export function unslug(string) {
  return string
    .replace(/-/g, " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (l) => l.toUpperCase());
}

function parseItems(items, root, activePath) {
  const parsedItems = items.map((item) => {
    if (typeof item === "string") {
      // create full item from shorthand item
      item = {
        type: "doc",
        slug: item,
        path: `/${root}/${item}`,
        label: unslug(item),
      };
    } else {
      if (!item.type) {
        item.type = "doc";
      }
      if (item.label && !item.slug) {
        item.slug = item.label;
      }
      if (!item.path) {
        item.path = `/${root}/${item.slug}`;
      }
      if (!item.label && item.slug) {
        item.label = unslug(item.slug);
      }
    }

    if (item.items) {
      item.items = parseItems(item.items, `${root}/${item.slug}`, activePath);
    }

    item.active = item.path === activePath;

    return item;
  });

  function testForActive(i) {
    return i.active || i.items?.some(testForActive);
  }

  // lazily mark tab as active
  parsedItems
    .filter((i) => i.type === "tab")
    .forEach((tab, index) => {
      tab.activeTab =
        `${tab.path}/` === activePath ||
        (index === 0 && `/${root}/` === activePath) ||
        tab.items.some(testForActive);
    });

  return parsedItems;
}

export default function (docsRoute, activePath) {
  return parseItems(data, docsRoute, activePath);
}
