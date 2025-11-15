"use client";

import { useMemo, useState } from "react";
import { games } from "../data/games";
import clsx from "classnames";

const categories = ["All", ...new Set(games.map((game) => game.category))];
const complexities = ["All", ...new Set(games.map((game) => game.complexity))];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [complexity, setComplexity] = useState("All");
  const [activeId, setActiveId] = useState(games[0]?.id ?? "");

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch =
        search.trim().length === 0 ||
        [game.name, game.summary, game.category]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || game.category === category;
      const matchesComplexity =
        complexity === "All" || game.complexity === complexity;
      return matchesSearch && matchesCategory && matchesComplexity;
    });
  }, [search, category, complexity]);

  const activeGame = useMemo(() => {
    if (!activeId && filteredGames.length > 0) {
      return filteredGames[0];
    }
    return games.find((game) => game.id === activeId) ?? filteredGames[0];
  }, [activeId, filteredGames]);

  return (
    <main>
      <header className="hero">
        <div className="hero__badge">How To Play</div>
        <h1>Learn your next game at a glance.</h1>
        <p>
          Browse curated teach sheets, filter by vibe, and lock in the turn-by-turn
          rhythm before you hit the table.
        </p>
        <div className="toolbox">
          <div className="toolbox__group search">
            <label htmlFor="search">Search</label>
            <input
              id="search"
              placeholder="Try “birds”, “party”, or “dice”"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                if (filteredGames.length > 0) {
                  setActiveId(filteredGames[0].id);
                }
              }}
            />
          </div>
          <div className="toolbox__group">
            <span className="toolbox__label">Category</span>
            <div className="pills">
              {categories.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={clsx(
                    "pill",
                    category === value && "pill--active"
                  )}
                  onClick={() => {
                    setCategory(value);
                    const next =
                      value === "All"
                        ? filteredGames[0]?.id
                        : games.find((game) => game.category === value)?.id;
                    if (next) {
                      setActiveId(next);
                    }
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <div className="toolbox__group">
            <span className="toolbox__label">Complexity</span>
            <div className="pills">
              {complexities.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={clsx(
                    "pill",
                    complexity === value && "pill--active"
                  )}
                  onClick={() => {
                    setComplexity(value);
                    const next =
                      value === "All"
                        ? filteredGames[0]?.id
                        : games.find((game) => game.complexity === value)?.id;
                    if (next) {
                      setActiveId(next);
                    }
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="grid explorer">
        <aside className="catalog">
          <div className="catalog__list">
            {filteredGames.map((game) => (
              <button
                key={game.id}
                type="button"
                className={clsx(
                  "catalog__card",
                  activeGame?.id === game.id && "catalog__card--active"
                )}
                onClick={() => setActiveId(game.id)}
              >
                <div className="catalog__card-top">
                  <span className="catalog__category">{game.category}</span>
                  <span className="catalog__complexity">{game.complexity}</span>
                </div>
                <h3>{game.name}</h3>
                <p>{game.summary}</p>
                <div className="catalog__meta">
                  <span>{game.players}</span>
                  <span>{game.duration}</span>
                </div>
              </button>
            ))}
            {filteredGames.length === 0 && (
              <div className="catalog__empty">
                <h3>No matches yet</h3>
                <p>
                  Adjust your filters or clear the search to bring games back into
                  view.
                </p>
              </div>
            )}
          </div>
        </aside>

        {activeGame && (
          <article className="details">
            <div className="details__header">
              <div>
                <span className="badge">{activeGame.category}</span>
                <h2>{activeGame.name}</h2>
              </div>
              <div className="details__meta">
                <span>{activeGame.players}</span>
                <span>{activeGame.duration}</span>
                <span>{activeGame.complexity}</span>
              </div>
            </div>

            <section className="details__section">
              <h3>Table Quick Hits</h3>
              <ul className="details__essentials">
                {activeGame.essentials.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            <section className="details__section">
              <h3>Turn Structure</h3>
              <ol className="timeline">
                {activeGame.steps.map((step, index) => (
                  <li key={step.title} className="timeline__item">
                    <div className="timeline__index">{index + 1}</div>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="details__section">
              <h3>Table Sensei Tips</h3>
              <div className="tips">
                {activeGame.tips.map((tip) => (
                  <blockquote key={tip}>{tip}</blockquote>
                ))}
              </div>
            </section>
          </article>
        )}
      </section>
    </main>
  );
}
