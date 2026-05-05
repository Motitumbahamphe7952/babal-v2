import { Icon } from "@iconify/react";

interface Feature {
  text: string;
}

interface CPanelProps {
  title?: string;
  features?: {
    column1: Feature[];
    column2: Feature[];
    column3: Feature[];
  };
}

const CPANEL_DEFAULTS = {
  title: "cPanel Features",
  features: {
    column1: [
      { text: "Instant Setup" },
      { text: "JetBackup 5-30-days incremental offsite backup" },
      { text: "Softaculous Premium - 451 scripts auto-install" },
      { text: "WP CLI" },
      { text: "Spam Protection; Outbound spam filtering" },
      { text: "Imunify360 protection" },
      { text: "Email Forwarders; Catch-all email" },
    ],
    column2: [
      { text: "Free SSL Certificate" },
      { text: "One click Cloudflare activation" },
      { text: "Unlimited disk usage, bandwidth" },
      { text: "CageFS Security" },
      { text: "Unlimited MySQL disk usage" },
      { text: "50MB Attachment size" },
      { text: "Auto responders" },
    ],
    column3: [
      { text: "100% Cloud Servers" },
      { text: "One-click WordPress install" },
      { text: "Cloudlinux" },
      { text: "Unlimited file usage" },
      { text: "Secure Webmail access" },
      { text: "PHP 4.4, 5.1-5.6, 7.1-7.4, 8.0-8.1" },
      { text: "IMAP/POP3" },
    ],
  },
};

const CPanel = ({
  title = CPANEL_DEFAULTS?.title,
  features = CPANEL_DEFAULTS.features,
}: CPanelProps) => {
  return (
    <section className="my-12 pattern-secondary-bg">
      <div className="container py-10 text-foreground my-10">
        <div className="mx-auto">
          <h2 className="font-bold mb-10 text-center">{title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.keys(features).map((columnKey) => (
              <div key={columnKey} className="space-y-4">
                {features[columnKey as keyof typeof features].map(
                  (feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon
                        icon="material-symbols:check-rounded"
                        width="24"
                        height="24"
                        className="shrink-0 mt-1"
                      />
                      <span className="text-lg">{feature.text}</span>
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPanel;
