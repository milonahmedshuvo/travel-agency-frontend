"use client";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Script from "next/script";
import { getCookie } from "cookies-next";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, container: string) => void;
      };
    };
  }
}

export const languages = [
  {
    label: "Croatian",
    value: "hr",
    src: "https://flagcdn.com/h60/hr.png",
  },
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "German", value: "de", src: "https://flagcdn.com/h60/de.png" },
  { label: "French", value: "fr", src: "https://flagcdn.com/h60/fr.png" },
  { label: "Spanish", value: "es", src: "https://flagcdn.com/h60/es.png" },
];

export function GoogleTranslate() {
  const [selected, setSelected] = useState(languages[0]);

  // Read from cookie on mount
  useEffect(() => {
    const cookieValue = getCookie("googtrans"); // e.g. "/auto/fr"
    if (cookieValue && typeof cookieValue === "string") {
      const parts = cookieValue.split("/");
      const targetLang = parts[2]; // third part is the target language
      const match = languages.find((l) => l.value === targetLang);
      if (match) setSelected(match);
    }
  }, []);

  // initialize Google Translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "auto",
            includedLanguages: languages.map((l) => l.value).join(","),
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  // Change language
  function onChange(lang: (typeof languages)[0]) {
    setSelected(lang);
    const combo = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;
    if (combo) {
      combo.value = lang.value;
      combo.dispatchEvent(new Event("change"));
    }
  }

  return (
    <div className="w-48">
      <div id="google_translate_element" className="hidden" />

      <Listbox value={selected} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm">
            <span className="flex items-center">
              <img src={selected.src} alt="" className="mr-2 h-4 w-6" />
              <span>{selected.label}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              ▼
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages.map((lang) => (
                <Listbox.Option
                  key={lang.value}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-9 ${
                      active ? "bg-gray-100" : ""
                    }`
                  }
                  value={lang}
                >
                  {({ selected: isSelected }) => (
                    <>
                      <div className="flex items-center">
                        <img
                          src={lang.src}
                          alt=""
                          className="mr-2 h-4 w-6 flex-shrink-0"
                        />
                        <span
                          className={`block truncate ${
                            isSelected ? "font-semibold" : ""
                          }`}
                        >
                          {lang.label}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                          ✔
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
